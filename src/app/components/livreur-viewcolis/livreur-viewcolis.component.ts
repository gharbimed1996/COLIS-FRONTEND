import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colis } from 'src/app/Colis';
import { AppService } from 'src/app/app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livreur-viewcolis',
  templateUrl: './livreur-viewcolis.component.html',
  styleUrls: ['./livreur-viewcolis.component.css']
})
export class LivreurViewcolisComponent implements OnInit {
 
  
  ColisToUpdate = {
    id :"",
    matricule: "",
    name: "",
    description: "",
    fragile: true,

  }
  
  users: any[] | undefined
  colis?: Colis;
  data: any
    url: string = "http://localhost:8090/query/colis/list";
  
    constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }
  
    ngOnInit(): void {
      this.service.getUsers().subscribe(data => {
        this.users = data;
    })}
      /* let colisId = this.route.snapshot.params['colisId'];
    this.service.getUserById(colisId).subscribe(data => {
      this.colis = data
      console.log(this.colis)
    })
    }*/
    alertwithsuccess() {
      Swal.fire({
        title: 'En Depot',
        text: 'Ce colis est en Depot',
        imageUrl: '../../../assets/images/depot.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
    alertwithsuccess2() {
      Swal.fire({
        title: 'En Cours',
        text: 'Ce colis est en cous de livraison',
        imageUrl: '../../../assets/images/gifff.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      
    }
    alertwithsuccess3() {
      Swal.fire({
        title: 'Retour',
        text: 'Ce colis est Perdu',
        imageUrl: '../../../assets/images/cross.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      
    }

    alertwithsuccess4() {
      Swal.fire({
        title: 'Livré',
        text: 'Ce colis est Livré',
        imageUrl: '../../../assets/images/ceh.gif',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      
    }

    /*EndepotColis(colisId: string){
      this.service.EndepotColis(this.data).subscribe(data => {
        console.log(data)
      })
  
      this.router.navigate(['/']);
    }
    }*/

   /*EncoursColis(colisId: string){
     this.service.getUserById(colisId).subscribe(
       (resp) => {
          console.log(resp);
        },
        (err) => {
          console.log(err);
        }
      );
    }*/
    
    accepterColis(colisId: string) {
      // Récupérer les détails du colis existant
      this.service.getUserById(colisId).subscribe(
        (colis: Colis) => {
          // Créer un nouvel objet Colis en mettant à jour uniquement la propriété status
          const colisUpdate= {
            id: this.colis?.id ,
            matricule: this.colis?.matricule,
            name: this.colis?.name,
            description: this.colis?.description,
            fragile: this.colis?.fragile
          };
    



          
          // Effectuer la mise à jour du colis
          this.service.acceptColis(colis).subscribe(
            response => {
              // Traitement de la réponse de la requête
              console.log('Le statut du colis a été mis à jour avec succès.', response);
              // Effectuer d'autres actions si nécessaire
            },
            error => {
              // Gestion des erreurs de la requête
              console.error('Une erreur s\'est produite lors de la mise à jour du statut du colis :', error);
              // Effectuer d'autres actions en cas d'erreur
            }
          );
        },
        error => {
          // Gestion des erreurs lors de la récupération des détails du colis
          console.error('Une erreur s\'est produite lors de la récupération des détails du colis :', error);
        }
      );
    }




    EncoursColis(colisId: string) {
      // Récupérer les détails du colis existant
      this.service.getUserById(colisId).subscribe(
        (colis: Colis) => {
          // Créer un nouvel objet Colis en mettant à jour uniquement la propriété status
          const colisUpdate= {
            id: this.colis?.id ,
            matricule: this.colis?.matricule,
            name: this.colis?.name,
            description: this.colis?.description,
            fragile: this.colis?.fragile
          };
    



          
          // Effectuer la mise à jour du colis
          this.service.encoursColis(colis).subscribe(
            response => {
              // Traitement de la réponse de la requête
              console.log('Le statut du colis a été mis à jour avec succès.', response);
              // Effectuer d'autres actions si nécessaire
            },
            error => {
              // Gestion des erreurs de la requête
              console.error('Une erreur s\'est produite lors de la mise à jour du statut du colis :', error);
              // Effectuer d'autres actions en cas d'erreur
            }
          );
        },
        error => {
          // Gestion des erreurs lors de la récupération des détails du colis
          console.error('Une erreur s\'est produite lors de la récupération des détails du colis :', error);
        }
      );
    }



    EnretourColis(colisId: string) {
      // Récupérer les détails du colis existant
      this.service.getUserById(colisId).subscribe(
        (colis: Colis) => {
          // Créer un nouvel objet Colis en mettant à jour uniquement la propriété status
          const colisUpdate= {
            id: this.colis?.id ,
            matricule: this.colis?.matricule,
            name: this.colis?.name,
            description: this.colis?.description,
            fragile: this.colis?.fragile
          };
    



          
          // Effectuer la mise à jour du colis
          this.service.enretourColis(colis).subscribe(
            response => {
              // Traitement de la réponse de la requête
              console.log('Le statut du colis a été mis à jour avec succès.', response);
              // Effectuer d'autres actions si nécessaire
            },
            error => {
              // Gestion des erreurs de la requête
              console.error('Une erreur s\'est produite lors de la mise à jour du statut du colis :', error);
              // Effectuer d'autres actions en cas d'erreur
            }
          );
        },
        error => {
          // Gestion des erreurs lors de la récupération des détails du colis
          console.error('Une erreur s\'est produite lors de la récupération des détails du colis :', error);
        }
      );
    }
    


    livreColis(colisId: string) {
      // Récupérer les détails du colis existant
      this.service.getUserById(colisId).subscribe(
        (colis: Colis) => {
          // Créer un nouvel objet Colis en mettant à jour uniquement la propriété status
          const colisUpdate= {
            id: this.colis?.id ,
            matricule: this.colis?.matricule,
            name: this.colis?.name,
            description: this.colis?.description,
            fragile: this.colis?.fragile
          };
    



          
          // Effectuer la mise à jour du colis
          this.service.livreColis(colis).subscribe(
            response => {
              // Traitement de la réponse de la requête
              console.log('Le statut du colis a été mis à jour avec succès.', response);
              // Effectuer d'autres actions si nécessaire
            },
            error => {
              // Gestion des erreurs de la requête
              console.error('Une erreur s\'est produite lors de la mise à jour du statut du colis :', error);
              // Effectuer d'autres actions en cas d'erreur
            }
          );
        },
        error => {
          // Gestion des erreurs lors de la récupération des détails du colis
          console.error('Une erreur s\'est produite lors de la récupération des détails du colis :', error);
        }
      );
    }
    
  }