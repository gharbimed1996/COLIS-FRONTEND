import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service'


@Component({
  selector: 'app-viewproductsbycategorie',
  templateUrl: './viewOrganisationMember.component.html',
  styleUrls: ['./viewOrganisationMember.component.css']
})
export class ViewOrganisationMemberComponent {
  members: any[] | undefined
  categories: any[] | undefined
  searchTerm: string = '';
  url: string = "http://localhost:8084/produits";

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getorgMembers(id).subscribe(data => {
      this.members = data;
      console.log(data);
    })
  }
}
