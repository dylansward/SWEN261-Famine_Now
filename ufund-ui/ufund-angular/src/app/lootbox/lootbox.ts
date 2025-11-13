import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CssEquipper } from '../css-equipper';
import { HelperBasket } from '../helper-basket';

@Component({
  selector: 'app-lootbox',
  standalone: false,
  templateUrl: './lootbox.html',
  styleUrls: ['./lootbox.css']
})
export class Lootbox implements AfterViewInit {
  @ViewChild('wheel') wheel!: ElementRef;
  @ViewChild('spin') spin_button!: ElementRef;

  public results: string[] = ["0", "1", "2", "3", "4", "5", "6", "7"];
  selected = "";

  constructor(private helper: HelperBasket,private css: CssEquipper) { }
  
  setWheel(): void {
    this.results = this.css.getRandomResults(this.helper.current_basket.styles);
  }

  delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngAfterViewInit() {
    this.setWheel();
  }
    async spinButton() {
    const value = Math.ceil(Math.random() * 3600);
    this.wheel.nativeElement.style.transform = `rotate(${value}deg)`;
    this.spin_button.nativeElement.style.pointerEvents = 'none';
    this.spin_button.nativeElement.style.pointer = 'none';
    const normalized = value % 360;

    const corrected = (360 - normalized + 22.5) % 360;
    const index = Math.floor(corrected / 45);

    const result = this.results[index];
    console.log("Result:", result);
    await this.delay(3000);
    this.selected = this.results[index];
    await this.delay(1000);
    this.spin_button.nativeElement.style.pointerEvents = 'all';
    this.spin_button.nativeElement.style.pointer = 'all';
  }

}
