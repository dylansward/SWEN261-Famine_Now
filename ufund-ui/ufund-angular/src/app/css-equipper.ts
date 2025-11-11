import { Injectable } from '@angular/core';
import { Basket } from './basket';

@Injectable({
  providedIn: 'root'
})
export class CssEquipper {  
  private all_styles: string[] = ["background-default", "header-default", "subheader-default", "text-default", "input-default", "button-default"]
  private doc_style = document.documentElement.style

  set_default_styles(): void {
    this.set_background("background-default");
    this.set_header("header-default");
    this.set_subheader("subheader-default");
    this.set_text("text-default");
    this.set_input("input-default");
    this.set_button("button-default");

  }

  set_styles_user(user: Basket): void {
    

  }

  set_background(bg: string): void {
    switch (bg) {
      case "background-default":
        this.doc_style.setProperty('--bg-color', 'linear-gradient(white)');
        this.doc_style.setProperty('--header-bg-color', 'linear-gradient(transparent)');
        this.doc_style.setProperty('--need-color', '#e5e5e5');
        break;
    
      default:
        this.doc_style.setProperty('--bg-color', 'linear-gradient(white)');
        this.doc_style.setProperty('--header-bg-color', 'linear-gradient(transparent)');
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
        this.doc_style.setProperty('--h2-font-family', 'serif');
        break;
    
      default:
        this.doc_style.setProperty('--h2-color', '#000000');
        this.doc_style.setProperty('--h2-font-family', 'serif');
        break;
    }
  }

  set_text(text: string): void {
    switch (text) {
      case "text-default":
        this.doc_style.setProperty('--h2-color', '#000000');
        this.doc_style.setProperty('--h2-font-family', 'serif');
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
    
      default:
        this.doc_style.setProperty('--input-color', 'transparent');
        this.doc_style.setProperty('--input-rounded', '0px');
        this.doc_style.setProperty('--input-border', '2px solid black');
        break;
    }
  }

  set_button(input: string): void {
    switch (input) {
      case "button-default":
        this.doc_style.setProperty('--button-color', 'linear-gradient(#d4d4d4)');
        this.doc_style.setProperty('--button-rounded', '5px');
        this.doc_style.setProperty('--button-border', '2px solid transparent');
        this.doc_style.setProperty('--button-text-color', '#000000');
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
