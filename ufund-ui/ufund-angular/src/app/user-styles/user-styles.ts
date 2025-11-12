import { Component } from '@angular/core';
import { HelperBasket } from '../helper-basket';
import { CssEquipper } from '../css-equipper';


@Component({
  selector: 'app-user-styles',
  standalone: false,
  templateUrl: './user-styles.html',
  styleUrl: './user-styles.css'
})
export class UserStyles {
  constructor(private helper: HelperBasket) { }

  getStyles(): string[] {
    return this.helper.current_basket.styles;
  }

  display(str: string): string {
    return str;
  }

  getBackgrounds(): string[] {
    let styles = this.getStyles();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("background") != -1) {
        console.log(styles[i].indexOf("background"));
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }

  getBackground(): string {
    return this.helper.current_basket.sel_background;
  }
  getHeader(): string {
    return this.helper.current_basket.sel_header;
  }
  getSubheader(): string {
    return this.helper.current_basket.sel_subheader;
  }
  getText(): string {
    return this.helper.current_basket.sel_text;
  }
  getInput(): string {
    return this.helper.current_basket.sel_input;
  }
  getButton(): string {
    return this.helper.current_basket.sel_button;
  }
}
