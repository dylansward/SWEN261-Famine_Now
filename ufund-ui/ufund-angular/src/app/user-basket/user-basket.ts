import { Component, Input, OnInit } from '@angular/core';
import { Need } from '../need';
import { HelperBasket } from '../helper-basket';

@Component({
  selector: 'app-user-basket',
  standalone: false,
  templateUrl: './user-basket.html',
  styleUrl: './user-basket.css'
})
export class UserBasket {

  constructor(private helper: HelperBasket) { }

  getContents(): Need[] {
    return this.helper.current_basket.contents;
  }

  getBasketCost(): string {
    let total = 0.0;
    for(let n of this.getContents()) {
      total += n.cost * n.quantity;
    }
    return total.toFixed(2);
  }

  checkout(): void {
    
  }

}
