import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-dashboard',
  templateUrl: './item-dashboard.component.html',
  styleUrls: ['./item-dashboard.component.css'],
})
export class ItemDashboardComponent implements OnInit {
  cartNotify: string = '';
  ItemLogo: string =
    'https://images-workbench.99static.com/W5YVyzEJ3BRKR95_qtYbsISNEsk=/http://s3.amazonaws.com/projects-files/28/2802/280220/ffffa996-d07b-49be-9fca-c1fe90d3da28.jpg';
  ItemLogo1: string =
    'https://images-workbench.99static.com/hxp-e_YakLh7PDHzPj3_u2-vu4w=/99designs-contests-attachments/127/127804/attachment_127804455';
  ItemLogo2: string =
    'https://images-workbench.99static.com/HnPyz5bD7-CFflMYcI-ZxcTtMdU=/99designs-contests-attachments/116/116880/attachment_116880596';
  ItemLogo3: string =
    'https://images-workbench.99static.com/aQxYTT2SZ4OnxXGCD4E03whEtqw=/99designs-contests-attachments/82/82344/attachment_82344152';
  ItemLogo4: string =
    'https://images-workbench.99static.com/Z-xdhHmTOkHJ80J8q_3cYmH1RdI=/99designs-contests-attachments/101/101446/attachment_101446461';
  ItemLogo5: string =
    'https://images-workbench.99static.com/Hdyxp-oZeFH_-2h6CIzcugZ5iTE=/99designs-contests-attachments/86/86294/attachment_86294747';
  selectedProduct: any = {};

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService._cart.subscribe((result: string) => {
      console.log(result);
      this.cartNotify = result;
    });
  }

  updateNotify0(productName: string, productRating: String, price: string) {
    this.selectedProduct = {
      productName: productName,
      productRating: productRating,
      price: price,
    };
  }
  updateNotify1(productName: string, productRating: String, price: string) {
    this.selectedProduct = {
      productName: productName,
      productRating: productRating,
      price: price,
    };
  }
  updateNotify2(productName: string, productRating: String, price: string) {
    this.selectedProduct = {
      productName: productName,
      productRating: productRating,
      price: price,
    };
  }
  updateNotify3(productName: string, productRating: String, price: string) {
    this.selectedProduct = {
      productName: productName,
      productRating: productRating,
      price: price,
    };
  }
  updateNotify4(productName: string, productRating: String, price: string) {
    this.selectedProduct = {
      productName: productName,
      productRating: productRating,
      price: price,
    };
  }
  updateNotify5(productName: string, productRating: String, price: string) {
    this.selectedProduct = {
      productName: productName,
      productRating: productRating,
      price: price,
    };
  }
}
