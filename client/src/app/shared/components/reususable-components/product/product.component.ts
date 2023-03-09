import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @Input() product: Product;

  ratings: number = 5;

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
