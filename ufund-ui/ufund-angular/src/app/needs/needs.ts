import {Component, Input, OnInit} from '@angular/core';
import { Need } from '../need';
import { BackendConnection } from '../backend-connection';
import { AppModule } from '../app-module';
import { HelperBasket } from '../helper-basket';



@Component({
  selector: 'app-needs',
  standalone: false,
  templateUrl: './needs.html',
  styleUrl: './needs.css'
})
export class Needs implements OnInit {
  needs: Need[] = [];
  curr_id: number = 0;
  curr_name: string = "";
  curr_cost: number = 0.0;
  curr_quantity: number = 0;

  new_name: string = "";
  new_cost: number = 0;
  new_quantity: number = 0;

  constructor(private backend: BackendConnection, private helper: HelperBasket) { }

  ngOnInit(): void {
    this.getNeeds();
  }

  getNeeds(): void {
    this.backend.getNeeds().subscribe(needs => {
      this.needs = needs
      for (let need of this.needs) {
        if (this.needInBasket(need)){
          need.current_quantity = this.helper.getBasketQuantity(need);
        } else {
          need.current_quantity = 1;
        }
      }
    });
  }

  searchNeeds(input: string): void {
    this.backend.searchNeeds(input).subscribe(needs => {
      this.needs = needs
      for (let need of this.needs) {
        if (this.needInBasket(need)){
          need.current_quantity = this.helper.getBasketQuantity(need);
        } else {
          need.current_quantity = 1;
        }
      }
    });
  }

  findNeedById(id: number): number {
    let temp = -1;
    for (let i: number = 0; i < this.needs.length; i++) {
      if (this.needs[i].id == id) {
        temp = i;
        return temp;
      }
    }
    return temp;
  }

  startEdit(n: Need): void {
    let old_index = this.findNeedById(this.curr_id);
    if (old_index != -1) {
      this.needs[old_index].current = false;
    }
    n.current = true;
    this.curr_id = n.id;
    this.curr_name = n.name;
    this.curr_cost = n.cost;
    this.curr_quantity = n.quantity;
  }

  updateEdit(n: Need): void {
    console.log("end editing");
    console.log(n.name);
    n.current = false;
    let updated: Need = {
      id: this.curr_id,
      name: this.curr_name,
      cost: parseFloat(this.curr_cost.toFixed(2)),
      quantity: parseInt(this.curr_quantity.toFixed(0)),
      current: false,
      current_quantity: 0,
    };
    this.backend.updateNeed(updated as Need).subscribe(need => {this.needs[this.findNeedById(this.curr_id)] = need});
  }

  discardEdit(n: Need): void {
    console.log("end editing");
    n.current = false;
  }

  add(name_field: HTMLInputElement, cost_field: HTMLInputElement, quantity_field: HTMLInputElement): void {
    let name = name_field.value.trim();
    let cost = parseFloat(cost_field.value.trim());
    let quantity = parseInt(quantity_field.value.trim());
    if (!name){
      return;
    }
    name_field.value = "";
    cost_field.value = "";
    quantity_field.value = "";
   
    let new_need: Need = {
      id: -1,
      name: name,
      cost: cost,
      quantity: quantity,
      current: false,
      current_quantity: 0,
    };
    this.backend.addNeed(new_need as Need).subscribe(need => {this.needs.push(need)});
  }

  delete(need: Need): void {
    this.needs = this.needs.filter(n => n !== need);
    this.backend.deleteNeed(need.id).subscribe();
  }

  isAdmin(): boolean {
    return (AppModule.user_status == 2);
  }

  isUser(): boolean {
    return (AppModule.user_status == 1);
  }

  updateNeedCurrQuantity(need: Need, field: HTMLInputElement): void {
    let temp: number = need.current_quantity;
    if (temp < 1) {
      temp = 0;
    } else if (temp > need.quantity) {
      temp = need.quantity;
    }
    temp = parseInt(temp.toString());
    need.current_quantity = temp;

    field.value = temp.toString();
  }

  updateNeedCurrQuantityInBasket(need: Need, field: HTMLInputElement): void {
    let temp: number = need.current_quantity;
    if (temp < 1) {
      temp = 1;
    } else if (temp > need.quantity) {
      temp = need.quantity;
    }
    temp = parseInt(temp.toString());
    need.current_quantity = temp;

    field.value = temp.toString();

    console.log(need.current_quantity);
  }

  needInBasket(need: Need): boolean {
    return this.helper.isNeedInBasket(need);
  }

  addToBasket(need: Need): void {
    let new_need: Need = {
      id: need.id,
      name: need.name,
      cost: need.cost,
      quantity: need.current_quantity,
      current: false,
      current_quantity: 0,
    };

    console.log(new_need);
    
    this.helper.addToBasket(new_need as Need);
    
    this.helper.refreshBasket();
  }

  removeFromBasket(need: Need): void {
    let to_be_removed: Need = {
      id: need.id,
      name: need.name,
      cost: need.cost,
      quantity: need.current_quantity,
      current: false,
      current_quantity: 0,
    };

    this.helper.removeFromBasket(to_be_removed as Need);
    need.current_quantity = 1;
    
    this.helper.completeBasket();
  }

  displayNeed(n: Need): boolean {
    let temp = n.quantity > 0;
    console.log(temp);
    return ((this.isAdmin() && !n.current) || n.quantity > 0);
  }
}