import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';
import { CategoriesResponse, CategoryResponse, ServerResponse } from '../models/responses.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryBaseUrl = `${environment.apiBaseUrl}/categories`;

  categories: Category[] = [
    {
      _id: 'c1',
      name: 'Earrings',
      icon: 'ear',
      imgSrc: 'assets/img/collection/collection9.webp',
      checked: false
    },
    {
      _id: 'c2',
      name: 'Wedding Bridal',
      icon: 'wedding',
      imgSrc: 'assets/img/collection/collection10.webp',
      checked: false
    },
    {
      _id: 'c3',
      name: 'Shop Earrings',
      icon: 'ear',
      imgSrc: 'assets/img/collection/collection11.webp',
      checked: false
    },
    {
      _id: 'c4',
      name: 'Necklaces',
      icon: 'neck',
      imgSrc: 'assets/img/collection/collection7.webp',
      checked: false
    },
    {
      _id: 'c5',
      name: 'Bracelets',
      icon: 'ear',
      imgSrc: 'assets/img/collection/collection8.webp',
      checked: false
    }
  ];

  constructor(private http: HttpClient) { }

  getCategories():Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>(`${this.categoryBaseUrl}/get-categories`);
  }

  getCategory(categoryId: string):Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${this.categoryBaseUrl}/get-category/${categoryId}`);
  }

  postCategory(categoryBody: Category):Observable<ServerResponse> {
    return this.http.post<ServerResponse>(`${this.categoryBaseUrl}/post-category`, categoryBody);
  }

  updateCategory(categoryId: string, categoryBody: Category):Observable<ServerResponse> {
    return this.http.put<ServerResponse>(`${this.categoryBaseUrl}/update-category/${categoryId}`, categoryBody);
  }

  deleteCategory(categoryId: string):Observable<ServerResponse> {
    return this.http.delete<ServerResponse>(`${this.categoryBaseUrl}/delete-category/${categoryId}`);
  }
}
