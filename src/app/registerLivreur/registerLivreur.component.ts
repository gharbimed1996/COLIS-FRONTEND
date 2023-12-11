import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './registerLivreur.component.html',
  styleUrls: ['./registerLivreur.component.css']
})
export class RegisterLivreurComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    orgId:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email ,password, orgId } = this.form;

    this.authService.registerLivreur(username, email  , password,orgId).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
