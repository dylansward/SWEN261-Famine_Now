import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { Needs } from './needs/needs';
import { UserBasket } from './user-basket/user-basket';
import { Lootbox } from './lootbox/lootbox';

const routes: Routes = [
  {path: '', redirectTo: '/cupboard', pathMatch: 'full' },
  {path: 'login-page', component: LoginPage},
  {path: 'cupboard', component: Needs},
  {path: 'view-basket', component: UserBasket},
  {path: 'lootbox', component: Lootbox}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
