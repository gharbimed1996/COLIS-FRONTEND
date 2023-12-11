import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service'
import { Demande } from 'src/app/Demande'

@Component({
  selector: 'app-addcategorie',
  templateUrl: './ajoutDemande.component.html',
  styleUrls: ['./ajoutDemande.component.css']
})
export class AjoutDemandeComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }
  data: any
  message: string = '';

  showMessage() {
    this.message = 'La demande est envoyer avec Succes!';
  }

  form = new UntypedFormGroup({
    entrepriseName: new UntypedFormControl(null, [Validators.required]),
    emailPro: new UntypedFormControl(null, [Validators.required]),
    matricule: new UntypedFormControl(null, [Validators.required]),
    description: new UntypedFormControl(null, [Validators.required]),

  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.AjoutDemande(this.data).subscribe(data => {
      console.log(data)
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    })




  }

}
