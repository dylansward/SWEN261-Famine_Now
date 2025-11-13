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
  @ViewChild('result') result_block!: ElementRef;
  private wheel_pieces = document.getElementsByClassName("number");

  public results: string[] = ["0", "1", "2", "3", "4", "5", "6", "7"];
  selected = "";

  constructor(private helper: HelperBasket,private css: CssEquipper) { }
  
  setWheel(): void {
    this.results = this.css.getRandomResults(this.helper.current_basket.styles);
    if (this.getSpins() > 0){
      this.spin_button.nativeElement.style.pointerEvents = 'all';
      this.spin_button.nativeElement.style.pointer = 'all';
    } else {
      this.spin_button.nativeElement.style.pointerEvents = 'none';
      this.spin_button.nativeElement.style.pointer = 'none';
    }
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getSpins(): number {
    return this.helper.getSpins();
  }

  quickEquip(): void {
    if (this.selected.indexOf("background-") == 0) {
        this.helper.current_basket.sel_background = this.selected
      } else if (this.selected.indexOf("header-") == 0) {
        this.helper.current_basket.sel_header = this.selected
      } else if (this.selected.indexOf("subheader-") == 0) {
        this.helper.current_basket.sel_subheader = this.selected
      } else if (this.selected.indexOf("text-") == 0) {
        this.helper.current_basket.sel_text = this.selected
      } else if (this.selected.indexOf("input-") == 0) {
        this.helper.current_basket.sel_input = this.selected
      } else if (this.selected.indexOf("button-") == 0) {
        this.helper.current_basket.sel_button = this.selected
      }
      this.css.set_styles_user(this.helper.current_basket)
    this.hideResults();
  }

  async hideResults() {
    this.result_block.nativeElement.style.opacity = '0%';
    await this.delay(500);
    this.result_block.nativeElement.style.display = 'none';
  }

  ngAfterViewInit() {
    this.setWheel();
  }
  async spinButton() {
    const value = Math.ceil(Math.random() * 3600) + 720;
    this.wheel.nativeElement.style.transform = `rotate(${value}deg)`;
    this.spin_button.nativeElement.style.pointerEvents = 'none';
    this.spin_button.nativeElement.style.pointer = 'none';
    const normalized = value % 360;

    const corrected = (360 - normalized + 22.5) % 360;
    const index = Math.floor(corrected / 45);
    
    this.helper.spend10();
    const result = this.results[index];
    await this.delay(3000);
    this.selected = this.results[index];
    this.helper.addStyle(this.selected);
    this.result_block.nativeElement.style.display = 'block';
    await this.delay(1000);
    this.result_block.nativeElement.style.opacity = '100%';
    this.wheel.nativeElement.style.transition = 'transform 0.5s ease'
    this.wheel.nativeElement.style.transform = `rotate(${0}deg)`;
    for (let i: number = 0; i < 8; i++){
      const element = this.wheel_pieces[i] as HTMLElement;
      element.style.backgroundColor = 'white';
      element.style.textShadow = '3px 5px  2px rgba(0, 0, 0, 0.0)';
    }
    await this.delay(500);
    this.wheel.nativeElement.style.transition = 'transform 3s ease'
    for (let i: number = 0; i < 8; i++){
      const element = this.wheel_pieces[i] as HTMLElement;
      element.style.backgroundColor = 'var(--clr)';
      element.style.textShadow = '3px 5px  2px rgba(0, 0, 0, 0.15)';
    }
    this.setWheel();    
  }

}
