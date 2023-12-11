import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colis } from 'src/app/Colis';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewcolis',
  templateUrl: './viewcolis.component.html',
  styleUrls: ['./viewcolis.component.css']
})
export class ViewcolisComponent implements OnInit {
  

  users: any[] | undefined
  colis!: Colis;
    url: string = "http://localhost:8090/query/colis/list";
  
    constructor(private service: AppService, private router: Router) { 
     
    }
  
    ngOnInit(): void {
      this.service.getUsers().subscribe(data => {
        this.users = data;
      })
    }
    
    accepterColis(colisId: string) {
      // Récupérer les détails du colis existant
      this.service.getUserById(colisId).subscribe(
        (colis: Colis) => {
          // Créer un nouvel objet Colis en mettant à jour uniquement la propriété status
          const colisUpdate: Colis = {
            id: colisId,
            matricule: '',
            name: '',
            description: '',
            fragile: true
          };
    
          // Effectuer la mise à jour du colis
          this.service.acceptColis(colisUpdate).subscribe(
            response => {
              // Traitement de la réponse de la requête
              console.log('Le statut du colis a été mis à jour avec succès.');
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