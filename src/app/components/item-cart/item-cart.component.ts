import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css'],
})
export class ItemCartComponent implements OnInit {
  cartNotify: string = '';
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService._cart.subscribe(
      (result: string) => {
      console.log(result);
      this.cartNotify = result;
    });
  }
}
