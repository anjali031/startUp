import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AsJewelerComponent } from './as-jeweler/as-jeweler.component';
import { AsCitizenComponent } from './as-citizen/as-citizen.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateViewComponent } from './create-view/create-view.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PasswordComponent } from './password/password.component';
import { OrnamentsComponent } from './ornaments/ornaments.component';
import { RingsComponent } from './ornaments/rings/rings.component';
import { NeckComponent } from './ornaments/neck/neck.component';


const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'jeweler', component: AsJewelerComponent},
  { path: 'citizen', component: AsCitizenComponent},
  { path: 'login', component: LoginComponent},
  { path: 'changepassword', component: PasswordChangeComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'createview', component: CreateViewComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'read', component: ReadComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'dropdown', component: DropdownComponent},
  { path: 'password' , component: PasswordComponent },
  { path: 'rings' , component: OrnamentsComponent,
    children: [{ path : '' , component : RingsComponent }]
  },
  { path: 'neck' , component: OrnamentsComponent,
    children: [{ path : '' , component : NeckComponent }]
  },
  { path: '' , redirectTo: '/user', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
