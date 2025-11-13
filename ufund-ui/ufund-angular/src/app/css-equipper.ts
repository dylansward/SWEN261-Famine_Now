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
    "header-white", "subheader-white", "text-white", "header-white-sans", "subheader-white-serif", "text-white-serif", "input-white",
    "background-blue", "header-blue", "subheader-blue", "text-blue", "input-blue", "button-blue",
    "background-white-blue", "button-square-blue", "button-halloween", "button-rainbow",
    "background-black-blue", "background-light-blue", "background-sky", "background-halloween", "background-rainbow",
    "background-green", "background-light-green", "background-red-green", "text-green", "text-green-serif", "header-light-green", "subheader-green", "button-green", "button-green-inverse", "header-code-green",
    "background-orange", "background-yellow", "background-purple", "background-pink", "background-cyan",
    "button-magenta", "button-yellow", "input-invisible", "input-white-box", "input-black-box"
    
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
      case "background-blue":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#2251be)');
        this.doc_style.setProperty('--header-bg-color', '#2251be');
        this.doc_style.setProperty('--need-color', '#95b5ff');
        break;
      case "background-white-blue":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#2251be)');
        this.doc_style.setProperty('--header-bg-color', '#2251be');
        this.doc_style.setProperty('--need-color', 'white');
        break;
      case "background-black-blue":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#282828)');
        this.doc_style.setProperty('--header-bg-color', 'black');
        this.doc_style.setProperty('--need-color', '#073dbc');
        break;
      case "background-light-blue":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#33c9e0)');
        this.doc_style.setProperty('--header-bg-color', '#33c9e0');
        this.doc_style.setProperty('--need-color', '#118495');
        break;
      case "background-sky":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(to top, #4ea6d9, #4ea6d9, white, #4ea6d9)');
        this.doc_style.setProperty('--header-bg-color', '#4ea6d9');
        this.doc_style.setProperty('--need-color', 'white');
        break;
      case "background-halloween":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#282828)');
        this.doc_style.setProperty('--header-bg-color', 'black');
        this.doc_style.setProperty('--need-color', '#eb9122');
        break;
      case "background-rainbow":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(to right, red, orange, yellow, green, blue, purple)');
        this.doc_style.setProperty('--header-bg-color', 'white');
        this.doc_style.setProperty('--need-color', '#e5e5e5');
        break;
      case "background-green":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#0e730a)');
        this.doc_style.setProperty('--header-bg-color', '#0e730a');
        this.doc_style.setProperty('--need-color', '#6cde68');
        break;
      case "background-light-green":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#6cde68)');
        this.doc_style.setProperty('--header-bg-color', '#6cde68');
        this.doc_style.setProperty('--need-color', '#30c722');
        break;
      case "background-red-green":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#6cde68)');
        this.doc_style.setProperty('--header-bg-color', '#0e730a');
        this.doc_style.setProperty('--need-color', '#eb2222');
        break;
      case "background-orange":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#d96e30)');
        this.doc_style.setProperty('--header-bg-color', '#d96e30');
        this.doc_style.setProperty('--need-color', '#f2a477');
        break;
      case "background-yellow":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#fad019)');
        this.doc_style.setProperty('--header-bg-color', '#fad019');
        this.doc_style.setProperty('--need-color', '#94881e');
        break;
      case "background-purple":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#a177d1)');
        this.doc_style.setProperty('--header-bg-color', '#a177d1');
        this.doc_style.setProperty('--need-color', '#7f30d9');
        break;
      case "background-pink":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#ed80d7)');
        this.doc_style.setProperty('--header-bg-color', '#9e0c81');
        this.doc_style.setProperty('--need-color', '#d91ab3');
        break;
      case "background-cyan":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(#0ecf98)');
        this.doc_style.setProperty('--header-bg-color', '#0ecf98');
        this.doc_style.setProperty('--need-color', '#95f0d6');
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
      case "header-blue":
        this.doc_style.setProperty('--header-color', 'blue');
        this.doc_style.setProperty('--header-font-family', 'serif');
        break;
      case "header-light-green":
        this.doc_style.setProperty('--header-color', '#30c722');
        this.doc_style.setProperty('--header-font-family', 'serif');
        break;
      case "header-code-green":
        this.doc_style.setProperty('--header-color', 'green');
        this.doc_style.setProperty('--header-font-family', 'monospace');
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
      case "subheader-blue":
        this.doc_style.setProperty('--h2-color', '#071e55');
        this.doc_style.setProperty('--h2-font-family', 'sans-serif');
        break;
      case "subheader-green":
        this.doc_style.setProperty('--h2-color', '#20541c');
        this.doc_style.setProperty('--h2-font-family', 'sans-serif');
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
      case "text-blue":
        this.doc_style.setProperty('--text-color', 'blue');
        this.doc_style.setProperty('--text-font-family', 'sans-serif');
        break;
      case "text-green":
        this.doc_style.setProperty('--text-color', 'green');
        this.doc_style.setProperty('--text-font-family', 'sans-serif');
        break;
      case "text-green-serif":
        this.doc_style.setProperty('--text-color', '#20541c');
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
      case "input-blue":
        this.doc_style.setProperty('--input-color', 'transparent');
        this.doc_style.setProperty('--input-rounded', '0px');
        this.doc_style.setProperty('--input-border', '3px solid blue');
        break
      case "input-invisible":
        this.doc_style.setProperty('--input-color', 'transparent');
        this.doc_style.setProperty('--input-rounded', '0px');
        this.doc_style.setProperty('--input-border', '0px solid transparent');
        break
      case "input-white-box":
        this.doc_style.setProperty('--input-color', 'white');
        this.doc_style.setProperty('--input-rounded', '0px');
        this.doc_style.setProperty('--input-border', '0px solid transparent');
        break
      case "input-black-box":
        this.doc_style.setProperty('--input-color', 'black');
        this.doc_style.setProperty('--input-rounded', '0px');
        this.doc_style.setProperty('--input-border', '0px solid transparent');
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
      case "button-blue":
        this.doc_style.setProperty('--button-color', 'linear-gradient(#073dbc)');
        this.doc_style.setProperty('--button-rounded', '5px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', 'white');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;
      case "button-square-blue":
        this.doc_style.setProperty('--button-color', 'linear-gradient(#073dbc)');
        this.doc_style.setProperty('--button-rounded', '0px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', 'white');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;
      case "button-halloween":
        this.doc_style.setProperty('--button-color', 'linear-gradient(#ffb559)');
        this.doc_style.setProperty('--button-rounded', '5px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', 'black');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;
      case "button-rainbow":
        this.doc_style.setProperty('--button-color', 'linear-gradient(red, orange, yellow, green, blue, purple)');
        this.doc_style.setProperty('--button-rounded', '0px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', 'white');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;
      case "button-green":
        this.doc_style.setProperty('--button-color', 'linear-gradient(#66d65c)');
        this.doc_style.setProperty('--button-rounded', '0px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', 'black');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;
      case "button-green-inverse":
        this.doc_style.setProperty('--button-color', 'linear-gradient(black)');
        this.doc_style.setProperty('--button-rounded', '0px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', '#66d65c');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;
      case "button-yellow":
        this.doc_style.setProperty('--button-color', 'linear-gradient(to top, #fad019, #fad019, white)');
        this.doc_style.setProperty('--button-rounded', '5px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', 'black');
        this.doc_style.setProperty('--button-font-family', 'monospace');
        break;
      case "button-magenta":
        this.doc_style.setProperty('--button-color', 'linear-gradient(#c71056)');
        this.doc_style.setProperty('--button-rounded', '5px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', 'white');
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
