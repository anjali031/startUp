import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AsJewelerComponent } from './as-jeweler/as-jeweler.component';
import { AsCitizenComponent } from './as-citizen/as-citizen.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { PasswordChangeComponent } from './password-change/password-change.component';


const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'jeweler', component: AsJewelerComponent},
  { path: 'citizen', component: AsCitizenComponent},
  { path: 'login', component: LoginComponent},
  { path: 'changepassword', component: PasswordChangeComponent},
  { path: 'forms', component: FormsComponent},

  { path: '' , redirectTo: '/user', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
