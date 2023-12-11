import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { RegisterLivreurComponent } from './registerLivreur/registerLivreur.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ViewOrganisationMemberComponent } from './viewOrganisationMember/viewOrganisationMember.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';
import {LoginAdminComponent} from "./loginAdmin/LoginAdmin.component";
import {AjoutDemandeComponent} from "./ajoutDemande/ajoutDemande.component";
import {BoardAdminDemandeComponent} from "./board-admin-Demande/board-admin-demande.component";
import {AddEntrepriseComponent} from "./components/add-entreprise/add-entreprise.component";
import { addcolisComponent } from './components/addcolis/addcolis.component';
import { ViewcolisComponent } from './components/viewcolis/viewcolis.component';
import { addcartComponent } from './components/addcart/addcart.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';
import { LivreurViewcolisComponent } from './components/livreur-viewcolis/livreur-viewcolis.component';
import { EntrepriseViewdemandeComponent } from './components/entreprise-viewdemande/entreprise-viewdemande.component';
import { MethodepaymentComponent } from './components/methodepayment/methodepayment.component';
import { PagesuccessComponent } from './components/pagesuccess/pagesuccess.component';
import { PaymentenespeceComponent } from './components/paymentenespece/paymentenespece.component';
import { PaymentenligneComponent } from './components/paymentenligne/paymentenligne.component';
import { AddannounceComponent } from './components/addannounce/addannounce.component';
import { UpdateannounceComponent } from './components/updateannounce/updateannounce.component';
import { ViewannouncesComponent } from './components/viewannounces/viewannounces.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home/loginAdmin', component: LoginAdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerLivreur', component: RegisterLivreurComponent },

  { path: 'ajoutDemande', component: AjoutDemandeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },

  { path: 'admin', component: BoardAdminComponent },
  { path: 'lesdemandes', component: BoardAdminDemandeComponent },
  { path: 'addentreprise', component: AddEntrepriseComponent },
  { path: 'getMembers/:id', component: ViewOrganisationMemberComponent },

  { path: 'add', component: addcolisComponent },
  { path: 'listColis', component: ViewcolisComponent },
  { path: 'addcart', component: addcartComponent },
  { path: 'listCart', component: ViewcartComponent },
  { path: 'livreur', component: LivreurViewcolisComponent },
  { path: 'entreprise', component: EntrepriseViewdemandeComponent },
  { path: 'methode', component: MethodepaymentComponent },
  { path: 'espece', component: PaymentenespeceComponent },
  { path: 'enligne', component: PaymentenligneComponent },
  {path: 'pay/success', component:PagesuccessComponent},
  { path: 'announces', component: ViewannouncesComponent },
  { path: 'create', component: AddannounceComponent },
  { path: 'update/:id', component: UpdateannounceComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
