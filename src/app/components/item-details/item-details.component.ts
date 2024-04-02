import { Component, Input, OnInit } from '@angular/core';
import { DetailsModel } from 'src/app/model/details.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  cartNotify: string = '';
  @Input() selectedProduct: any;

  ItemLogo3: string = "https://images-workbench.99static.com/aQxYTT2SZ4OnxXGCD4E03whEtqw=/99designs-contests-attachments/82/82344/attachment_82344152"
 
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService._cart.subscribe((result: string) => {
      console.log(result);
      this.cartNotify = result;
    });
  }

  updateNotify() {
    this.cartService._updateNotify('Product added to cart successfully');
  }
}
