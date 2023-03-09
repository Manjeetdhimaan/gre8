import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from 'src/app/shared/models/product.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptionshome: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    navSpeed: 5000,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        "items": 1
      },
      480: {
        "items": 1
      },
      768: {
        "items": 1
      },
      992: {
        "items": 1
      },
      1200: {
        "items": 1,
      }
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 0,
    navSpeed: 400,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        "items": 2,
      },
      480: {
        "items": 3
      },
      600: {
        "items": 4
      },
      768: {
        "items": 4
      },
      992: {
        "items": 5
      },
      1200: {
        "items": 5,
      }
    }
  }

  products: Product[];
  categories: Category[];

  constructor( private productService: ProductService, private categoryService: CategoryService ) {}

  ngOnInit(): void {
    this.products = this.productService.products;
    this.categories = this.categoryService.categories;
  }
}
