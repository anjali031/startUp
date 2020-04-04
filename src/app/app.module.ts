import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { AsJewelerComponent } from './as-jeweler/as-jeweler.component';
import { LoginComponent } from './login/login.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { CustomerComponent } from './customer/customer.component';
import { ReadComponent } from './read/read.component';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RadiofillComponent } from './radiofill/radiofill.component';
import { OrnamentreadComponent } from './ornamentread/ornamentread.component';
import { OrnaringtypeComponent } from './ornament/ornaringtype/ornaringtype.component';
import { OrnaearringtypeComponent } from './ornament/ornaearringtype/ornaearringtype.component';
import { PendantearringtypeComponent } from './ornament/pendantearringtype/pendantearringtype.component';
import { OrnamentnosepinComponent } from './ornament/ornamentnosepin/ornamentnosepin.component';
import { BraceletComponent } from './ornament/bracelet/bracelet.component';
import { BanglesComponent } from './ornament/bangles/bangles.component';
import { ChainComponent } from './ornament/chain/chain.component';
import { ChainwithpendantComponent } from './ornament/chainwithpendant/chainwithpendant.component';
import { NecklaceComponent } from './ornament/necklace/necklace.component';
import { MangalsutraComponent } from './ornament/mangalsutra/mangalsutra.component';
import { SetsComponent } from './ornament/sets/sets.component';
import { PendantComponent } from './ornament/pendant/pendant.component';
import { OrnamentcufflinkComponent } from './ornamentcufflink/ornamentcufflink.component';
import { CufflinkComponent } from './ornament/cufflink/cufflink.component';
import { ReadspecificComponent } from './readspecific/readspecific.component';
import { PendantearringupdateComponent } from './updates/pendantearringupdate/pendantearringupdate.component';
import { CufflinkupdateComponent } from './updates/cufflinkupdate/cufflinkupdate.component';
import { PendantupdateComponent } from './updates/pendantupdate/pendantupdate.component';
import { SetsupdateComponent } from './updates/setsupdate/setsupdate.component';
import { MangalsutraupdateComponent } from './updates/mangalsutraupdate/mangalsutraupdate.component';
import { NecklaceupdateComponent } from './updates/necklaceupdate/necklaceupdate.component';
import { ChainpendatupdateComponent } from './updates/chainpendatupdate/chainpendatupdate.component';
import { ChainupdateComponent } from './updates/chainupdate/chainupdate.component';
import { BanglesupdateComponent } from './updates/banglesupdate/banglesupdate.component';
import { BraceletupdateComponent } from './updates/braceletupdate/braceletupdate.component';
import { RingupdateComponent } from './updates/ringupdate/ringupdate.component';
import { EarupdateComponent } from './updates/earupdate/earupdate.component';
import { NosepinupdateComponent } from './updates/nosepinupdate/nosepinupdate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateComponent } from './update/update.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AsJewelerComponent,
    LoginComponent,
    PasswordChangeComponent,
    CustomerComponent,
    ReadComponent,

    RadiofillComponent,
    OrnamentreadComponent,
    OrnaringtypeComponent,
    OrnaearringtypeComponent,
    PendantearringtypeComponent,
    OrnamentnosepinComponent,
    BraceletComponent,
    BanglesComponent,
    ChainComponent,
    ChainwithpendantComponent,
    NecklaceComponent,
    MangalsutraComponent,
    SetsComponent,
    PendantComponent,
    OrnamentcufflinkComponent,
    CufflinkComponent,
    ReadspecificComponent,
    NavbarComponent,
    PendantearringupdateComponent,
    CufflinkupdateComponent,
    PendantupdateComponent,
    SetsupdateComponent,
    MangalsutraupdateComponent,
    NecklaceupdateComponent,
    ChainpendatupdateComponent,
    ChainupdateComponent,
    BanglesupdateComponent,
    BraceletupdateComponent,
    RingupdateComponent,
    EarupdateComponent,
    NosepinupdateComponent,
    UpdateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
