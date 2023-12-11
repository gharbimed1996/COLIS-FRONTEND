import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin-demande.component.html',
  styleUrls: ['./board-admin-demande.component.css']
})
export class BoardAdminDemandeComponent implements OnInit {
  content?: string;
  isLoggedIn = false;
  demande: any[] | undefined

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.getdemande().subscribe(data => {
      this.demande = data;
    })
  }
  ajoutEntreprise(){
    this.router.navigate(['addentreprise']);
  }
}
