import {Component, OnInit} from '@angular/core';
import { Need } from '../need';
import { BackendConnection } from '../backend-connection';
import {FormsModule} from '@angular/forms';


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
  curr_quanity: number = 0;

  constructor(private backend: BackendConnection) { }

  ngOnInit(): void {
    this.getNeeds();
  }

  getNeeds(): void {
    this.backend.getNeeds().subscribe(needs => this.needs = needs);
  }

  startEdit(n: Need): void {
    console.log("start editing");
    console.log(n.name);
    n.current = true;
    this.curr_id = n.id;
    this.curr_name = n.name;
    this.curr_cost = n.cost;
    this.curr_quanity = n.quantity;
  }

  updateEdit(n: Need): void {
    console.log("end editing");
    console.log(n.name);
    n.current = false;
  }

  discardEdit(n: Need): void {
    console.log("end editing");
    n.current = false;
  }
}