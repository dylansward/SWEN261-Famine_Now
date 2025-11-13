import { Injectable } from '@angular/core';
import { Basket } from './basket';

@Injectable({
  providedIn: 'root'
})
export class CssEquipper {  
  private all_styles: string[] = [
    "background-default", "header-default", "subheader-default", "text-default", "input-default", "button-default", 
    "background-red", "header-red", "subheader-red", "text-red", "input-red", "button-red",
    "background-white-red", "button-square-red", 
    "background-black-red", "background-black",
    "header-white", "subheader-white", "text-white", "header-white-sans", "subheader-white-serif", "text-white-serif", "input-white"
  ]
  private doc_style = document.documentElement.style
  
  randomRange(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomResults(cant_take: string[]): string[] {
    let styles: string[] = this.all_styles.filter(s => !cant_take.includes(s));
    let rand_8: string[] = [];
    if (styles.length > 0){
      while (styles.length < 8) {
        styles = styles.concat(styles);
      }
      while (rand_8.length < 8) {
        let temp = this.randomRange(0, styles.length);
        rand_8.push(styles[temp]);
        styles.slice(temp, 1);
      }

    } else {
      return ["background-default", "background-default", "background-default", "background-default", "background-default", "background-default", "background-default", "background-default"];
    }
    return rand_8;
  }

  getAll(): string[] {
    return this.all_styles;
  }

  set_default_styles(): void {
    this.set_background("background-default");
    this.set_header("header-default");
    this.set_subheader("subheader-default");
    this.set_text("text-default");
    this.set_input("input-default");
    this.set_button("button-default");

  }

  set_styles_user(user: Basket): void {
    console.log(user.sel_input);
    console.log(user.sel_button);
    this.set_background(user.sel_background);
    this.set_header(user.sel_header);
    this.set_subheader(user.sel_subheader);
    this.set_text(user.sel_text);
    this.set_input(user.sel_input);
    this.set_button(user.sel_button);
  }

  set_styles_admin(sel_background: string, sel_header: string, sel_subheader: string, sel_text: string, sel_input: string, sel_button: string): void {
    this.set_background(sel_background);
    this.set_header(sel_header);
    this.set_subheader(sel_subheader);
    this.set_text(sel_text);
    this.set_input(sel_input);
    this.set_button(sel_button);
  }

  set_background(bg: string): void {
    switch (bg) {
      case "background-default":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(white)');
        this.doc_style.setProperty('--header-bg-color', 'white');
        this.doc_style.setProperty('--need-color', '#e5e5e5');
        break;
      case "background-red":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#eb2222)');
        this.doc_style.setProperty('--header-bg-color', '#eb2222');
        this.doc_style.setProperty('--need-color', '#f57373');
        break;
      case "background-white-red":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(white)');
        this.doc_style.setProperty('--header-bg-color', 'white');
        this.doc_style.setProperty('--need-color', '#eb2222');
        break;
      case "background-black-red":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#282828)');
        this.doc_style.setProperty('--header-bg-color', 'black');
        this.doc_style.setProperty('--need-color', '#eb2222');
        break;
      case "background-black":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#282828)');
        this.doc_style.setProperty('--header-bg-color', '#282828');
        this.doc_style.setProperty('--need-color', 'black');
        break;
      
      default:
        this.doc_style.setProperty('--bg-color', 'linear-gradient(white)');
        this.doc_style.setProperty('--header-bg-color', 'white');
        this.doc_style.setProperty('--need-color', '#e5e5e5');
        break;
    }
  }

  set_header(header: string): void {
    switch (header) {
      case "header-default":
        this.doc_style.setProperty('--header-color', '#000000');
        this.doc_style.setProperty('--header-font-family', 'serif');
        break;
      case "header-red":
        this.doc_style.setProperty('--header-color', '#ff0000');
        this.doc_style.setProperty('--header-font-family', 'serif');
        break;
      case "header-white":
        this.doc_style.setProperty('--header-color', 'white');
        this.doc_style.setProperty('--header-font-family', 'serif');
        break;
      case "header-white-sans":
        this.doc_style.setProperty('--header-color', 'white');
        this.doc_style.setProperty('--header-font-family', 'sans-serif');
        break;
      default:
        this.doc_style.setProperty('--header-color', '#000000');
        this.doc_style.setProperty('--header-font-family', 'serif');
        break;
    }
  }

  set_subheader(subheader: string): void {
    switch (subheader) {
      case "subheader-default":
        this.doc_style.setProperty('--h2-color', '#000000');
        this.doc_style.setProperty('--h2-font-family', 'sans-serif');
        break;
      case "subheader-red":
        this.doc_style.setProperty('--h2-color', '#9c0000');
        this.doc_style.setProperty('--h2-font-family', 'sans-serif');
        break;
      case "subheader-white":
        this.doc_style.setProperty('--h2-color', 'white');
        this.doc_style.setProperty('--h2-font-family', 'sans-serif');
        break;
      case "subheader-white-serif":
        this.doc_style.setProperty('--h2-color', 'white');
        this.doc_style.setProperty('--h2-font-family', 'serif');
        break;
      default:
        this.doc_style.setProperty('--h2-color', '#000000');
        this.doc_style.setProperty('--h2-font-family', 'sans-serif');
        break;
    }
  }

  set_text(text: string): void {
    switch (text) {
      case "text-default":
        this.doc_style.setProperty('--text-color', '#000000');
        this.doc_style.setProperty('--text-font-family', 'sans-serif');
        break;
      case "text-red":
        this.doc_style.setProperty('--text-color', '#731919');
        this.doc_style.setProperty('--text-font-family', 'sans-serif');
        break;
      case "text-white":
        this.doc_style.setProperty('--text-color', 'white');
        this.doc_style.setProperty('--text-font-family', 'sans-serif');
        break;
      case "text-white-serif":
        this.doc_style.setProperty('--text-color', 'white');
        this.doc_style.setProperty('--text-font-family', 'serif');
        break;
      default:
        this.doc_style.setProperty('--text-color', '#000000');
        this.doc_style.setProperty('--text-font-family', 'sans-serif');
        break;
    }
  }

  set_input(input: string): void {
    switch (input) {
      case "input-default":
        this.doc_style.setProperty('--input-color', 'transparent');
        this.doc_style.setProperty('--input-rounded', '0px');
        this.doc_style.setProperty('--input-border', '2px solid black');
        break;
      case "input-red":
        this.doc_style.setProperty('--input-color', 'transparent');
        this.doc_style.setProperty('--input-rounded', '0px');
        this.doc_style.setProperty('--input-border', '3px solid red');
        break
      case "input-white":
        this.doc_style.setProperty('--input-color', 'transparent');
        this.doc_style.setProperty('--input-rounded', '5px');
        this.doc_style.setProperty('--input-border', '2px solid white');
        break
      default:
        this.doc_style.setProperty('--input-color', 'transparent');
        this.doc_style.setProperty('--input-rounded', '0px');
        this.doc_style.setProperty('--input-border', '2px solid black');
        break;
    }
  }

  set_button(button: string): void {
    switch (button) {
      case "button-default":
        this.doc_style.setProperty('--button-color', 'linear-gradient(#d4d4d4)');
        this.doc_style.setProperty('--button-rounded', '5px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', '#000000');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;
      case "button-red":
        this.doc_style.setProperty('--button-color', 'linear-gradient(black)');
        this.doc_style.setProperty('--button-rounded', '5px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', 'red');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;
      case "button-square-red":
        this.doc_style.setProperty('--button-color', 'linear-gradient(black)');
        this.doc_style.setProperty('--button-rounded', '0px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', 'red');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;

      default:
        this.doc_style.setProperty('--button-color', 'linear-gradient(#d4d4d4)');
        this.doc_style.setProperty('--button-rounded', '5px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', '#000000');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;
    }
  }
}
