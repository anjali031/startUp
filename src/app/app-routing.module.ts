import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AsJewelerComponent } from './as-jeweler/as-jeweler.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateViewComponent } from './create-view/create-view.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { OrnamentsComponent } from './ornaments/ornaments.component';
import { RingsComponent } from './ornaments/rings/rings.component';
import { NeckComponent } from './ornaments/neck/neck.component';
import { JewelornamComponent } from './jewelornam/jewelornam.component';
import { CreatevieComponent } from './createvie/createvie.component';
import { CreatevievComponent } from './createviev/createviev.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { RadiofillComponent } from './radiofill/radiofill.component';
import { CreatevieuComponent } from './createvieu/createvieu.component';
import { OrnamentreadComponent } from './ornamentread/ornamentread.component';
import { OrnamentupdateComponent } from './ornamentupdate/ornamentupdate.component';
import { OrnamentmultiselectComponent } from './ornamentmultiselect/ornamentmultiselect.component';
import { Ornament1multiselectComponent } from './ornament1multiselect/ornament1multiselect.component';
import { OrnaringtypeComponent } from './ornament/ornaringtype/ornaringtype.component';
import { OrnaearringtypeComponent } from './ornament/ornaearringtype/ornaearringtype.component';
import { PendantearringtypeComponent } from './ornament/pendantearringtype/pendantearringtype.component';
import { OrnamentnosepinComponent } from './ornament/ornamentnosepin/ornamentnosepin.component';
import { BraceletComponent } from './ornament/bracelet/bracelet.component';
import { BanglesComponent } from './ornament/bangles/bangles.component';
import { ChainwithpendantComponent } from './ornament/chainwithpendant/chainwithpendant.component';
import { MangalsutraComponent } from './ornament/mangalsutra/mangalsutra.component';
import { NecklaceComponent } from './ornament/necklace/necklace.component';
import { ChainComponent } from './ornament/chain/chain.component';
import { PendantComponent } from './ornament/pendant/pendant.component';
import { SetsComponent } from './ornament/sets/sets.component';
import { CufflinkComponent } from './ornament/cufflink/cufflink.component';
import { OrnamentcufflinkComponent } from './ornamentcufflink/ornamentcufflink.component';



const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'jeweler', component: AsJewelerComponent},
  { path: 'login', component: LoginComponent},
  { path: 'changepassword', component: PasswordChangeComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'createview', component: CreateViewComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'read', component: ReadComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'orna', component: CreatevieComponent},
  { path: 'ornviev', component: CreatevievComponent},
  { path: 'ornvieu', component: CreatevieuComponent},
  { path: 'multisell', component: MultiselectComponent},
  { path: 'radiofill', component: RadiofillComponent},
  { path: 'ornamentread', component: OrnamentreadComponent},
  { path: 'ornamentupdate', component: OrnamentupdateComponent},
  { path: 'ornamentmultiselect', component: OrnamentmultiselectComponent},
  { path: 'Ornament1multiselect', component: Ornament1multiselectComponent},
  { path: 'Ornaringtype', component: OrnaringtypeComponent},
  { path: 'Ornaearringtype', component: OrnaearringtypeComponent},
  { path: 'Pendantearringtype', component: PendantearringtypeComponent},
  { path: 'Bangles', component: BanglesComponent},
  { path: 'Bracelet', component: BraceletComponent},
  { path: 'chain', component: ChainComponent},
  { path: 'chainwithpendant', component: ChainwithpendantComponent},
  { path: 'mangalsutra', component: MangalsutraComponent},
  { path: 'Necklace', component: NecklaceComponent},
  { path: 'Pendant', component: PendantComponent},
  { path: 'set', component: SetsComponent},
  { path: 'cufflink', component: CufflinkComponent},
  { path: 'nosepin', component: OrnamentnosepinComponent},
  { path: 'types', component: OrnamentcufflinkComponent},




  { path: 'rings' , component: OrnamentsComponent,
    children: [{ path : '' , component : RingsComponent }]
  },
  { path: 'neck' , component: OrnamentsComponent,
    children: [{ path : '' , component : NeckComponent }]
  },
  { path: '' , redirectTo: '/jeweler', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
