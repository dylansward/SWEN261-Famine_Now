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
}