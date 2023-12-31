import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/home',
    pathMatch: 'full',
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
