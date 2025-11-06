import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lootbox',
  standalone: false,
  templateUrl: './lootbox.html',
  styleUrls: ['./lootbox.css']
})
export class Lootbox implements AfterViewInit {
  @ViewChild('wheel') wheel!: ElementRef;

  results = [
    "Blue header",
    "Halloween body",
    "Pink buttons",
    "Red textarea",
    "Purple text",
    "Large font",
    "Small font",
    "New buttons"
  ];

  ngAfterViewInit() {}

    spinButton() {
    const value = Math.ceil(Math.random() * 3600);
    this.wheel.nativeElement.style.transform = `rotate(${value}deg)`;

    const normalized = value % 360;

    const corrected = (360 - normalized + 22.5) % 360;
    const index = Math.floor(corrected / 45);

    const result = this.results[index];
    console.log("Result:", result);
  }


}
