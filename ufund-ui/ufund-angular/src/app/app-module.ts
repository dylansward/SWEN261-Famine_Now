import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Needs } from './needs/needs';
import { LoginPage } from './login-page/login-page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserInfo } from './user-info/user-info';
import { UserBasket } from './user-basket/user-basket';
import { Lootbox } from './lootbox/lootbox';
import { UserStyles } from './user-styles/user-styles';



@NgModule({
  declarations: [
    App,
    Needs,
    LoginPage,
    UserInfo,
    UserBasket,
    Lootbox,
    UserStyles,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgFor,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { 
  static user_status: number = 0;
}
