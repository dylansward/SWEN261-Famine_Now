import { Component } from '@angular/core';
import { Need } from '../need';
import { HelperBasket } from '../helper-basket';
import { BackendConnection } from '../backend-connection';

@Component({
  selector: 'app-user-basket',
  standalone: false,
  templateUrl: './user-basket.html',
  styleUrl: './user-basket.css'
})
export class UserBasket {

  constructor(private backend: BackendConnection, private helper: HelperBasket) { }

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
    this.backend.getNeeds().subscribe(needs => {
      for (let need of needs) {
        if (this.helper.isNeedInBasket(need)) {
          need.quantity -= this.helper.getBasketQuantity(need);
          this.backend.updateNeed(need).subscribe();
        }
      }
      this.helper.clearBasket();
      console.log("CHECKOUT!")
    });
  }

}
