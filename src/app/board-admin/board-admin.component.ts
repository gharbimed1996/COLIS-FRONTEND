import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  isLoggedIn = false;
  orgs: any[] | undefined

  constructor(private userService: UserService ,private  router: Router) { }

  ngOnInit(): void {
    this.userService.getorgs().subscribe(data => {
      this.orgs = data;
    })
  }
  AddAdminOrg(id: string){
    this.router.navigate(['updateC', id]);
  }
  onCellClick(orgId: number) {
    this.router.navigate(['getMembers/', orgId]);
  }
}
