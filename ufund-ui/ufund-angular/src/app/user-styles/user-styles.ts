import { Component } from '@angular/core';
import { HelperBasket } from '../helper-basket';
import { CssEquipper } from '../css-equipper';
import { AppModule } from '../app-module';

@Component({
  selector: 'app-user-styles',
  standalone: false,
  templateUrl: './user-styles.html',
  styleUrl: './user-styles.css'
})
export class UserStyles {
  private admin_background: string = "background-default";
  private admin_header: string = "header-default";
  private admin_subheader: string = "subheader-default";
  private admin_text: string = "text-default";
  private admin_input: string = "input-default";
  private admin_button: string = "button-default";

  constructor(private helper: HelperBasket, private css: CssEquipper) { }

  isAdmin(): boolean {
    return (AppModule.user_status == 2);
  }
  
  isUser(): boolean {
    return (AppModule.user_status == 1);
  }

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
      if (styles[i].indexOf("background-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }
  getHeaders(): string[] {
    let styles = this.getStyles();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("header-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }
  getSubheaders(): string[] {
    let styles = this.getStyles();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("subheader-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }
  getTexts(): string[] {
    let styles = this.getStyles();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("text-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }
  getInputs(): string[] {
    let styles = this.getStyles();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("input-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }
  getButtons(): string[] {
    let styles = this.getStyles();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("button-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }

  getAllBackgrounds(): string[] {
    let styles = this.css.getAll();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("background-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }
  getAllHeaders(): string[] {
    let styles = this.css.getAll();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("header-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }
  getAllSubheaders(): string[] {
    let styles = this.css.getAll();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("subheader-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }
  getAllTexts(): string[] {
    let styles = this.css.getAll();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("text-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }
  getAllInputs(): string[] {
    let styles = this.css.getAll();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("input-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }
  getAllButtons(): string[] {
    let styles = this.css.getAll();
    let good_styles: string[] = [];
    for(let i: number = 0; i < styles.length; i++){
      if (styles[i].indexOf("button-") == 0) {
        good_styles.push(styles[i]);
      }
    }
    return good_styles;
  }

  getBackground(): string {
    if (this.isUser()) {
      return this.helper.current_basket.sel_background;
    } else{
      return this.admin_background;
    }
  }
  getHeader(): string {
    if (this.isUser()) {
      return this.helper.current_basket.sel_header;
    } else {
      return this.admin_header;
    }
  }
  getSubheader(): string {
    if (this.isUser()) {
      return this.helper.current_basket.sel_subheader;
    } else {
      return this.admin_subheader;
    }
  }
  getText(): string {
    if (this.isUser()) {
      return this.helper.current_basket.sel_text;
    } else {
      return this.admin_text;
    }
  }
  getInput(): string {
    if (this.isUser()) {
      return this.helper.current_basket.sel_input;
    } else {
      return this.admin_input;
    }
  }
  getButton(): string {
    if (this.isUser()) {
      return this.helper.current_basket.sel_button;
    } else {
      return this.admin_button;
    }
  }

  equip(str: string): void {
    if (this.isUser()) {
      if (str.indexOf("background-") == 0) {
        this.helper.current_basket.sel_background = str
      } else if (str.indexOf("header-") == 0) {
        this.helper.current_basket.sel_header = str
      } else if (str.indexOf("subheader-") == 0) {
        this.helper.current_basket.sel_subheader = str
      } else if (str.indexOf("text-") == 0) {
        this.helper.current_basket.sel_text = str
      } else if (str.indexOf("input-") == 0) {
        this.helper.current_basket.sel_input = str
      } else if (str.indexOf("button-") == 0) {
        this.helper.current_basket.sel_button = str
      }
      this.css.set_styles_user(this.helper.current_basket)
    } else if (this.isAdmin()) {
      if (str.indexOf("background-") == 0) {
        this.admin_background = str
      } else if (str.indexOf("header-") == 0) {
        this.admin_header = str
      } else if (str.indexOf("subheader-") == 0) {
        this.admin_subheader = str
      } else if (str.indexOf("text-") == 0) {
        this.admin_text = str
      } else if (str.indexOf("input-") == 0) {
        this.admin_input = str
      } else if (str.indexOf("button-") == 0) {
        this.admin_button = str
      }
      this.css.set_styles_admin(this.admin_background, this.admin_header, this.admin_subheader, this.admin_text, this.admin_input, this.admin_button)
    }

    
  }
}
