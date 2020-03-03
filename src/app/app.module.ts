import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { AsJewelerComponent } from './as-jeweler/as-jeweler.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateViewComponent } from './create-view/create-view.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ChainComponent } from './ornament/chain/chain.component';
import { ChainwithpendantComponent } from './ornament/chainwithpendant/chainwithpendant.component';
import { NecklaceComponent } from './ornament/necklace/necklace.component';
import { MangalsutraComponent } from './ornament/mangalsutra/mangalsutra.component';
import { SetsComponent } from './ornament/sets/sets.component';
import { PendantComponent } from './ornament/pendant/pendant.component';
import { OrnamentcufflinkComponent } from './ornamentcufflink/ornamentcufflink.component';
import { CufflinkComponent } from './ornament/cufflink/cufflink.component';
import { ChangeComponent } from './ornament/change/change.component';
import { ReadspecificComponent } from './readspecific/readspecific.component';
import { EarringsComponent } from './update/earrings/earrings.component';
import { NosepinComponent } from './update/nosepin/nosepin.component';
import { ChainpendatComponent } from './update/chainpendat/chainpendat.component';
import { PendantearringComponent } from './update/pendantearring/pendantearring.component';
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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    AsJewelerComponent,
    LoginComponent,
    FormsComponent,
    PasswordChangeComponent,
    CustomerComponent,
    CreateViewComponent,
    ReadComponent,
    UpdateComponent,
    OrnamentsComponent,
    RingsComponent,
    NeckComponent,
    JewelornamComponent,
    CreatevieComponent,
    CreatevievComponent,
    MultiselectComponent,
    RadiofillComponent,
    CreatevieuComponent,
    OrnamentreadComponent,
    OrnamentupdateComponent,
    OrnamentmultiselectComponent,
    Ornament1multiselectComponent,
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
    ChangeComponent,
    ReadspecificComponent,
    EarringsComponent,
    NosepinComponent,
    ChainpendatComponent,
    PendantearringComponent,
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
    NosepinupdateComponent
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
