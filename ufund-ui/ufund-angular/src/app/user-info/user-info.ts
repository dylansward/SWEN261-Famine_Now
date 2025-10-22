import { Component } from '@angular/core';
import { HelperBasket } from '../helper-basket';
import { AppModule } from '../app-module';

@Component({
  selector: 'app-user-info',
  standalone: false,
  templateUrl: './user-info.html',
  styleUrl: './user-info.css'
})
export class UserInfo {

  constructor(private helper: HelperBasket) { }
  
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
    return this.helper.current_basket.user;
  }

  logout() {
    this.helper.completeBasket();

    AppModule.user_status = 0;
  }

}
