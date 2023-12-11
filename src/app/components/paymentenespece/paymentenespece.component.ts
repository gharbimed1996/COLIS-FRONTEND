import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../app.service';
import { Router } from '@angular/router'; // import the Router module


@Component({
  selector: 'app-paymentenespece',
  templateUrl: './paymentenespece.component.html',
  styleUrls: ['./paymentenespece.component.css']
})
export class PaymentenespeceComponent implements OnInit {
  paymentForm !: FormGroup 

  constructor(private fb: FormBuilder, private  AppService : AppService,private router: Router) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      prix: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  onSubmit() {
    const ad = this.paymentForm.value;
    this.AppService.createAd(ad).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
    this.router.navigate(['/pay/success']); 
  }
}