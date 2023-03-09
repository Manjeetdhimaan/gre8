import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { ProductResponse, ProductsResponse, ServerResponse } from '../models/responses.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  productBaseUrl = `${environment.apiBaseUrl}/products`;

  products: Product[] = [
    {
      _id: 'p1',
      name: 'Z 7-8mm Freshwater Button is',
      richDescription: '',
      description: '',
      imageSrc: 'assets/img/product/main-product/product16.webp',
      images: ['assets/img/product/main-product/product9.webp'],
      colors: [''],
      weight: [''],
      brand: 'Gre8',
      mrpPrice: 245,
      currentPrice: 239,
      currency: 'USD',
      countInStock: 10,
      rating: 4,
      numReviews: 0,
      isFeatured: false,
      category: {
        _id: 'c1',
        name: 'ear',
        icon: 'ear',
        imgSrc: 'assets/img/collection/collection10.webp',
        checked: false
      },
      reviews: []
    },
    {
      _id: 'p2',
      name: 'Lorem, ipsum dolor sit ame elit.',
      richDescription: '',
      description: '',
      imageSrc: 'assets/img/product/main-product/product10.webp',
      images: ['assets/img/product/main-product/product15.webp'],
      colors: [''],
      weight: [''],
      brand: 'Gre8',
      mrpPrice: 362,
      currentPrice: 239,
      currency: 'USD',
      countInStock: 10,
      rating: 3,
      numReviews: 10,
      isFeatured: false,
      category: {
        _id: 'c1',
        name: 'ear',
        icon: 'ear',
        imgSrc: 'assets/img/collection/collection10.webp',
        checked: false
      },
      reviews: []
    },
    {
      _id: 'p3',
      name: 'Lorem, ipsum dolor sit ame elit.',
      richDescription: '',
      description: '',
      imageSrc: 'assets/img/product/main-product/product11.webp',
      images: ['assets/img/product/main-product/product14.webp'],
      colors: [''],
      weight: [''],
      brand: 'Gre8',
      mrpPrice: 362,
      currentPrice: 239,
      currency: 'USD',
      countInStock: 10,
      rating: 2,
      numReviews: 10,
      isFeatured: false,
      category: {
        _id: 'c1',
        name: 'ear',
        icon: 'ear',
        imgSrc: 'assets/img/collection/collection10.webp',
        checked: false
      },
      reviews: []
    },
    {
      _id: 'p4',
      name: 'Lorem, ipsum dolor sit ame elit.',
      richDescription: '',
      description: '',
      imageSrc: 'assets/img/product/main-product/product12.webp',
      images: ['assets/img/product/main-product/product13.webp'],
      colors: [''],
      weight: [''],
      brand: 'Gre8',
      mrpPrice: 362,
      currentPrice: 239,
      currency: 'USD',
      countInStock: 10,
      rating: 1,
      numReviews: 10,
      isFeatured: false,
      category: {
        _id: 'c1',
        name: 'ear',
        icon: 'ear',
        imgSrc: 'assets/img/collection/collection10.webp',
        checked: false
      },
      reviews: []
    },
    {
      _id: 'p5',
      name: 'Lorem, ipsum dolor sit ame elit.',
      richDescription: '',
      description: '',
      imageSrc: 'assets/img/product/main-product/product14.webp',
      images: ['assets/img/product/main-product/product9.webp'],
      colors: [''],
      weight: [''],
      brand: 'Gre8',
      mrpPrice: 362,
      currentPrice: 239,
      currency: 'USD',
      countInStock: 10,
      rating: 0,
      numReviews: 10,
      isFeatured: false,
      category: {
        _id: 'c1',
        name: 'ear',
        icon: 'ear',
        imgSrc: 'assets/img/collection/collection10.webp',
        checked: false
      },
      reviews: []
    },
    {
      _id: 'p6',
      name: 'Lorem, ipsum dolor sit ame elit.',
      richDescription: '',
      description: '',
      imageSrc: 'assets/img/product/main-product/product15.webp',
      images: ['assets/img/product/main-product/product10.webp'],
      colors: [''],
      weight: [''],
      brand: 'Gre8',
      mrpPrice: 362,
      currentPrice: 239,
      currency: 'USD',
      countInStock: 10,
      rating: 5,
      numReviews: 1,
      isFeatured: false,
      category: {
        _id: 'c1',
        name: 'ear',
        icon: 'ear',
        imgSrc: 'assets/img/collection/collection10.webp',
        checked: false
      },
      reviews: []
    },
    {
      _id: 'p7',
      name: 'Lorem, ipsum dolor sit ame elit.',
      richDescription: '',
      description: '',
      imageSrc: 'assets/img/product/main-product/product13.webp',
      images: ['assets/img/product/main-product/product14.webp'],
      colors: [''],
      weight: [''],
      brand: 'Gre8',
      mrpPrice: 362,
      currentPrice: 239,
      currency: 'USD',
      countInStock: 10,
      rating: 4,
      numReviews: 10,
      isFeatured: false,
      category: {
        _id: 'c1',
        name: 'ear',
        icon: 'ear',
        imgSrc: 'assets/img/collection/collection10.webp',
        checked: false
      },
      reviews: []
    },
    {
      _id: 'p8',
      name: 'Lorem, ipsum dolor sit ame elit.',
      richDescription: '',
      description: '',
      imageSrc: 'assets/img/product/main-product/product16.webp',
      images: ['assets/img/product/main-product/product10.webp'],
      colors: [''],
      weight: [''],
      brand: 'Gre8',
      mrpPrice: 362,
      currentPrice: 239,
      currency: 'USD',
      countInStock: 10,
      rating: 4,
      numReviews: 10,
      isFeatured: false,
      category: {
        _id: 'c1',
        name: 'ear',
        icon: 'ear',
        imgSrc: 'assets/img/collection/collection10.webp',
        checked: false
      },
      reviews: []
    }
  ];

  constructor(private http: HttpClient) { }

  getProducts(categoriesFilter?: string[], productsIds?: string[]): Observable<ProductsResponse> {
    let params = new HttpParams()
    if(categoriesFilter) {
      // params = params.append('categories', categoriesFilter.join(','))
      // or below approach //
      return this.http.get<ProductsResponse>(`${this.productBaseUrl}/get-products?categories=${categoriesFilter}`);
    }
    if(productsIds) {
      return this.http.get<ProductsResponse>(`${this.productBaseUrl}/get-products?productsIds=${productsIds}`);
    }
    // return this.http.get<ProductsResponse>(`${this.productBaseUrl}/get-products`, {params: params});
    return this.http.get<ProductsResponse>(`${this.productBaseUrl}/get-products`);
  }

  getFeaturedProducts(count: number, sort: number): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${this.productBaseUrl}/get-featured-products/${count}/${sort}`);
  }

  getProduct(productId: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.productBaseUrl}/get-product/${productId}`);
  }

  postProduct(productBody: FormData): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(`${this.productBaseUrl}/post-product`, productBody);
  }

  updateProduct(productId: string, productBody: FormData): Observable<ServerResponse> {
    return this.http.put<ServerResponse>(`${this.productBaseUrl}/update-product/${productId}`, productBody);
  }

  deleteProduct(productId: string): Observable<ServerResponse> {
    return this.http.delete<ServerResponse>(`${this.productBaseUrl}/delete-product/${productId}`);
  }

  getProductsCount(): Observable<number> {
    return this.http.get<number>(`${this.productBaseUrl}/get-products-count`)
      .pipe(map((objectValue: any) => objectValue.productsCount));
  }
}
