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
    contents: [],
    styles: ["background-default", "header-default", "subheader-default", "text-default", "input-default", "button-default"],
    sel_background: "background-default",
    sel_header: "header-default",
    sel_subheader: "subheader-default",
    sel_text: "text-default",
    sel_input: "input-default",
    sel_button: "button-default"
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
        contents: [],
        styles: ["background-default", "header-default", "subheader-default", "text-default", "input-default", "button-default"],
        sel_background: "background-default",
        sel_header: "header-default",
        sel_subheader: "subheader-default",
        sel_text: "text-default",
        sel_input: "input-default",
        sel_button: "button-default"
      };
      this.createNewBasket = true;

      for (let i = 0; i < this.baskets.length; i++) {
        if (this.baskets[i].user === username) {
          this.current_basket = this.baskets[i];
          this.createNewBasket = false;
          this.updateBasketItems();
          this.cleanBasketStyles();
        }
      }
      this.refreshBasket();
    });
  }

  completeBasket(logout: boolean = true): void {
    if (this.createNewBasket) {
      console.log("CREATED BASKET");
      this.backend.addBasket(this.current_basket as Basket).subscribe(basket => {
        this.current_basket.id = basket.id;
        this.createNewBasket = false;
      });
    } else {
      console.log("UPDATED BASKET");
      this.backend.updateBasket(this.current_basket as Basket).subscribe();
    }
    if (logout) {
      this.createNewBasket = false;
      this.current_basket = {
        id: -1,
        user: "",
        contents: [],
        styles: ["background-default", "header-default", "subheader-default", "text-default", "input-default", "button-default"],
        sel_background: "background-default",
        sel_header: "header-default",
        sel_subheader: "subheader-default",
        sel_text: "text-default",
        sel_input: "input-default",
        sel_button: "button-default"
      };
    }
  }

  refreshBasket(): void {
    this.completeBasket(false);
  }

  clearBasket(): void {
    this.current_basket.contents = [];
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
    console.log(this.current_basket.contents.length);
  }

  updateBasketItems(): void {
    for (let n of this.current_basket.contents) {
      this.backend.getNeed(n.id).subscribe(need => {
        n.name = need.name;
        n.cost = need.cost;
        if (n.quantity > need.quantity) {
          n.quantity = need.quantity;
        }
      });
    }
    
  }

  cleanBasketStyles(): void {
    if (this.current_basket.styles === undefined || this.current_basket.styles === null) {
      this.current_basket.styles = ["background-default", "header-default", "subheader-default", "text-default", "input-default", "button-default"]
    }
    if (this.current_basket.sel_background === undefined || this.current_basket.sel_background === null || this.current_basket.sel_background === "") {
      this.current_basket.sel_background = "background-default"
    }
    if (this.current_basket.sel_header === undefined || this.current_basket.sel_header === null || this.current_basket.sel_header === "") {
      this.current_basket.sel_header = "header-default"
    }
    if (this.current_basket.sel_subheader === undefined || this.current_basket.sel_subheader === null || this.current_basket.sel_subheader === "") {
      this.current_basket.sel_subheader = "subheader-default"
    }
    if (this.current_basket.sel_text === undefined || this.current_basket.sel_text === null || this.current_basket.sel_text === "") {
      this.current_basket.sel_text = "text-default"
    }
    if (this.current_basket.sel_input === undefined || this.current_basket.sel_input === null || this.current_basket.sel_input === "") {
      this.current_basket.sel_input = "input-default"
    }
    if (this.current_basket.sel_button === undefined || this.current_basket.sel_button === null || this.current_basket.sel_button === "") {
      this.current_basket.sel_button = "button-default"
    }
  }
}

  
