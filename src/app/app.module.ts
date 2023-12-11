import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterLivreurComponent } from './registerLivreur/registerLivreur.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { LoginAdminComponent } from './loginAdmin/LoginAdmin.component';
import { AjoutDemandeComponent } from './ajoutDemande/ajoutDemande.component';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminDemandeComponent } from './board-admin-Demande/board-admin-demande.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AddEntrepriseComponent } from './components/add-entreprise/add-entreprise.component';
import { ViewOrganisationMemberComponent } from './viewOrganisationMember/viewOrganisationMember.component';
import { ViewcolisComponent } from './components/viewcolis/viewcolis.component';
import { addcartComponent } from './components/addcart/addcart.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';

import { LivreurViewcolisComponent } from './components/livreur-viewcolis/livreur-viewcolis.component';
import { EntrepriseViewdemandeComponent } from './components/entreprise-viewdemande/entreprise-viewdemande.component';

import { addcolisComponent } from './components/addcolis/addcolis.component';
import { MethodepaymentComponent } from './components/methodepayment/methodepayment.component';
import { PaymentenligneComponent } from './components/paymentenligne/paymentenligne.component';
import { PaymentenespeceComponent } from './components/paymentenespece/paymentenespece.component';
import { PagesuccessComponent } from './components/pagesuccess/pagesuccess.component';
import { AddannounceComponent } from './components/addannounce/addannounce.component';
import { UpdateannounceComponent } from './components/updateannounce/updateannounce.component';
import { ViewannouncesComponent } from './components/viewannounces/viewannounces.component';
import { ViewsearchComponent } from './components/viewsearch/viewsearch.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LoginAdminComponent,
    AjoutDemandeComponent,
    BoardAdminDemandeComponent,
    AddEntrepriseComponent,
    RegisterLivreurComponent,
    ViewOrganisationMemberComponent,
    addcolisComponent,
    ViewcolisComponent,
    addcartComponent,
    ViewcartComponent,
    LivreurViewcolisComponent,
    EntrepriseViewdemandeComponent,
    MethodepaymentComponent,
    PaymentenligneComponent,
    PaymentenespeceComponent,
    PagesuccessComponent,
    AddannounceComponent,
    UpdateannounceComponent,
    ViewannouncesComponent,
    ViewsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
