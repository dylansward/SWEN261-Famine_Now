import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Needs } from './needs/needs';
import { LoginPage } from './login-page/login-page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    App,
    Needs,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
