import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import Swal from 'sweetalert2';
import { Cart } from 'src/app/Cart';

@Component({
  selector: 'app-entreprise-viewdemande',
  templateUrl: './entreprise-viewdemande.component.html',
  styleUrls: ['./entreprise-viewdemande.component.css']
})
export class EntrepriseViewdemandeComponent  implements OnInit {

  users: any[] | undefined
    url: string = "http://localhost:8090/query/cart/list";
  
    constructor(private service: AppService, private router: Router) { 
     
    }
  
    ngOnInit(): void {
      this.service.getcart().subscribe(data => {
        this.users = data;
      })
    }
    alertwithsuccess() {
      Swal.fire({
        title: 'Demande Rejetée',
        text: 'Cette demande est rejetée',
        imageUrl: '../../../assets/images/cross.gif',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
    alertwithsuccess2() {
      Swal.fire({
        title: 'Demande Acceptée',
        text: 'Cette demande est acceptée',
        imageUrl: '../../../assets/images/ceh.gif',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }

    acceptCart(cartId: string) {
      // Récupérer les détails du colis existant
      this.service.getCartById(cartId).subscribe(
        (cart: Cart) => {
          // Créer un nouvel objet Cart en mettant à jour uniquement la propriété status
          const cartUpdate = {
            id: cart.id,
            adresse: cart.adresse,
            nom: cart.nom,
            numTel: cart.numTel,
            email: cart.email,
            description: cart.description,
            status: 'Accepted' // Assuming 'Accepted' is the new status
          };
    
          // Effectuer la mise à jour du cart
          this.service.acceptCart(cartUpdate).subscribe(
            response => {
              // Traitement de la réponse de la requête
              console.log('Le statut du cart a été mis à jour avec succès.', response);
              // Effectuer d'autres actions si nécessaire
            },
            error => {
              // Gestion des erreurs de la requête
              console.error('Une erreur s\'est produite lors de la mise à jour du statut du cart :', error);
              // Effectuer d'autres actions en cas d'erreur
            }
          );
        },
        error => {
          // Gestion des erreurs lors de la récupération des détails du cart
          console.error('Une erreur s\'est produite lors de la récupération des détails du cart :', error);
        }
      );
    }
    
  }
