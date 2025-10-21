import { Component } from '@angular/core';
import { AppModule } from '../app-module';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
 username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log("Hello,Wordl!");
    if (this.username == "admin"){
      AppModule.user_status = 2;
    } else {
      AppModule.user_status = 1;
    }
    console.log(AppModule.user_status);
    }
  }

