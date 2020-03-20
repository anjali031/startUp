import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AsJewelerComponent } from './as-jeweler/as-jeweler.component';
import { LoginComponent } from './login/login.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { CustomerComponent } from './customer/customer.component';
import { ReadComponent } from './read/read.component';
import { RadiofillComponent } from './radiofill/radiofill.component';
import { OrnamentreadComponent } from './ornamentread/ornamentread.component';
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
import { ReadspecificComponent } from './readspecific/readspecific.component';
import { ChainupdateComponent } from './updates/chainupdate/chainupdate.component';
import { CufflinkupdateComponent } from './updates/cufflinkupdate/cufflinkupdate.component';
import { NecklaceupdateComponent } from './updates/necklaceupdate/necklaceupdate.component';
import { PendantearringupdateComponent } from './updates/pendantearringupdate/pendantearringupdate.component';
import { PendantupdateComponent } from './updates/pendantupdate/pendantupdate.component';
import { NosepinupdateComponent } from './updates/nosepinupdate/nosepinupdate.component';
import { MangalsutraupdateComponent } from './updates/mangalsutraupdate/mangalsutraupdate.component';
import { EarupdateComponent } from './updates/earupdate/earupdate.component';
import { BanglesupdateComponent } from './updates/banglesupdate/banglesupdate.component';
import { ChainpendatupdateComponent } from './updates/chainpendatupdate/chainpendatupdate.component';
import { BraceletupdateComponent } from './updates/braceletupdate/braceletupdate.component';
import { SetsupdateComponent } from './updates/setsupdate/setsupdate.component';
import { RingupdateComponent } from './updates/ringupdate/ringupdate.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'jeweler', component: AsJewelerComponent},
  { path: 'login', component: LoginComponent},
  { path: 'changepassword', component: PasswordChangeComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'read', component: ReadComponent},
  { path: 'update', component: UpdateComponent},

  { path: 'radiofill', component: RadiofillComponent},
  { path: 'ornamentread', component: OrnamentreadComponent},
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
  { path: 'readSpecific', component: ReadspecificComponent},
  { path: 'Banglesupdate', component: BanglesupdateComponent},
  { path: 'Braceletupdate', component: BraceletupdateComponent},
  { path: 'Chainpendatupdate', component: ChainpendatupdateComponent},
  { path: 'Chainupdate', component: ChainupdateComponent},
  { path: 'Cufflinkupdate', component: CufflinkupdateComponent},
  { path: 'Earupdate', component: EarupdateComponent},
  { path: 'Mangalsutraupdate', component: MangalsutraupdateComponent},
  { path: 'Necklaceupdate', component: NecklaceupdateComponent},
  { path: 'Nosepinupdate', component: NosepinupdateComponent},
  { path: 'Pendantearring', component: PendantearringupdateComponent},
  { path: 'Pendantupdate', component: PendantupdateComponent},
  { path: 'Ringupdate', component: RingupdateComponent},
  { path: 'Setsupdate', component: SetsupdateComponent},
  { path: '' , redirectTo: '/jeweler', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
