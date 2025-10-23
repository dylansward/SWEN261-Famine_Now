import { Component } from '@angular/core';
import { AppModule } from '../app-module';
import { HelperBasket } from '../helper-basket';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private helper: HelperBasket) { }
  

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    this.helper.completeBasket();

    if (this.username == "admin"){
      AppModule.user_status = 2;
    } 
    else if (this.username == "" || this.username == null){
      AppModule.user_status = 0;
    }
    else if (this.username != null) {
      AppModule.user_status = 1;
      this.helper.setupBasket(this.username);
    }
    
    console.log(AppModule.user_status);
    }
  }

