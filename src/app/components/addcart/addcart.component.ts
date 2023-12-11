import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class addcartComponent implements OnInit {
  constructor(private service: AppService, private router: Router) { }
  data: any
  selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
	}
  
  form = new FormGroup({
    adresse: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    numTel: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),

  })
  ngOnInit(): void {
  }
  alertwithsuccess() {
    Swal.fire("Merci...",'Votre commande a été ajoutée avec success','success')
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addcart(this.data).subscribe(data => {
      console.log(data)
    });
    this.router.navigate(['/listCart']);
  }
}
