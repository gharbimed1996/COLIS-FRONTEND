import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import { AuthService } from 'src/app/_services/auth.service'
import { Router } from '@angular/router';
import {orgs} from "../../orgs";

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.css']
})
export class AddEntrepriseComponent implements OnInit {

  constructor( private authService: AuthService ,private router: Router) { }
  data: any
  org? : orgs


  form = new UntypedFormGroup({
    name: new UntypedFormControl(null , [Validators.required]),

  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.authService.Ajoutorgs(this.data).subscribe(data => {
      console.log(data)
      setTimeout(()=>{
        window.location.reload();
      }, 100);
      this.router.navigate(['/admin']);
    })
  }



}
