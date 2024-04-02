import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemCartComponent } from './components/item-cart/item-cart.component';
import { ItemDashboardComponent } from './components/item-dashboard/item-dashboard.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { HeaderComponent } from './shared/template/header/header.component';
import { CartService } from './services/cart.service';
@NgModule({
  declarations: [
    AppComponent,
    ItemDashboardComponent,
    ItemDetailsComponent,
    ItemCartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
