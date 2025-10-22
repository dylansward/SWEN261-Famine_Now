import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { Needs } from './needs/needs';
import { UserBasket } from './user-basket/user-basket';

const routes: Routes = [
  {path: 'login-page', component: LoginPage},
  {path: 'cupboard', component: Needs},
  {path: 'view-basket', component: UserBasket}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
