import { Injectable } from '@angular/core';

import { BackendConnection } from './backend-connection';
import { Need } from './need';
import { Basket } from './basket';

@Injectable({
  providedIn: 'root'
})

export class HelperBasket {
  current_basket: Basket = {
    id: -1,
    user: "",
    contents: []
  };
  baskets: Basket[] = [];
  createNewBasket: boolean = false;
  constructor(private backend: BackendConnection) { }
  
  setupBasket(username: string) {
    this.backend.getBaskets().subscribe(baskets => {
      this.baskets = baskets
      
      this.current_basket = {
        id: -1,
        user: username,
        contents: []
      };
      this.createNewBasket = true;

      for (let i = 0; i < this.baskets.length; i++) {
        if (this.baskets[i].user === username) {
          this.current_basket = this.baskets[i];
          this.createNewBasket = false;
          console.log("BASKET EXISTS");
        }
      }
    });
  }

  completeBasket(logout: boolean = true): void {
    if (this.current_basket.contents.length > 0) {
      if (this.createNewBasket) {
        console.log("CREATED BASKET");
        this.backend.addBasket(this.current_basket as Basket).subscribe();
      } else {
        console.log("UPDATED BASKET");
        this.backend.updateBasket(this.current_basket as Basket).subscribe();
      }
    }
    if (logout) {
      this.createNewBasket = false;
      this.current_basket = {
        id: -1,
        user: "",
        contents: []
      };
    }
  }

  refreshBasket(): void {
    this.completeBasket(false);
  }


  isNeedInBasket(n: Need): boolean {
    for (let need of this.current_basket.contents) {
      if (n.id === need.id) {
        return true;
      }
    }
    return false;
  }

  addToBasket(n: Need): void {
    for (let need of this.current_basket.contents) {
      if (n.id === need.id) {
        need.quantity = n.quantity;
        return;
      }
    }
    this.current_basket.contents.push(n);
  }

  getBasketQuantity(n: Need): number {
    for (let need of this.current_basket.contents) {
      if (n.id === need.id) {
        return need.quantity;
      }
    }
    return 0;
  }

  removeFromBasket(need: Need): void {
    this.current_basket.contents = this.current_basket.contents.filter(n => n.id !== need.id);
    console.log(this.current_basket.contents);
  }
}
