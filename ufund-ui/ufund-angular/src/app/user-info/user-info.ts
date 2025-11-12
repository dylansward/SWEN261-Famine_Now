import { Component } from '@angular/core';
import { HelperBasket } from '../helper-basket';
import { AppModule } from '../app-module';
import { App } from '../app';
import { CssEquipper } from '../css-equipper';

@Component({
  selector: 'app-user-info',
  standalone: false,
  templateUrl: './user-info.html',
  styleUrl: './user-info.css'
})
export class UserInfo {

  constructor(private helper: HelperBasket, private css: CssEquipper) { }
  
  isAdmin(): boolean {
    return (AppModule.user_status == 2);
  }
  
  isUser(): boolean {
    return (AppModule.user_status == 1);
  }

  isLoggedOut(): boolean {
    return (AppModule.user_status == 0);
  }

  getUsername(): string {
    console.log(this.helper.current_basket.user);
    return this.helper.current_basket.user;
  }

  logout() {
    this.helper.completeBasket();
    this.css.set_default_styles();
    AppModule.user_status = 0;
  }
  LootBoxVisible() :boolean{
    if (AppModule.user_status == 1){
      return true;
    }
    else{
      return false;
    }
  }

}
