import {Component, OnInit} from '@angular/core';
import { Need } from '../need';
import { BackendConnection } from '../backend-connection';

@Component({
  selector: 'app-needs',
  standalone: false,
  templateUrl: './needs.html',
  styleUrl: './needs.css',
})
export class Needs implements OnInit {
  needs: Need[] = []

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
  }

  add(name:string): void {
    name = name.trim();
    if(!name) {return;}
    this.backend.addNeed({name} as Need).subscribe(need => {this.needs.push(need)});
  }

  delete(need: Need): void {
    this.needs = this.needs.filter(n => n !== need);
    this.backend.deleteNeed(need.id).subscribe();
  }
}