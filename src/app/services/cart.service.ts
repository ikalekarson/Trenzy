import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CartService {
  private cartSubject = new BehaviorSubject<string>('');
  _cart: Observable<string> = this.cartSubject.asObservable();

  _updateNotify(cart: string) {
    this.cartSubject.next(cart)
  }
}
