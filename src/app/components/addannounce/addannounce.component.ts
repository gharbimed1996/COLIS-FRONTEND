import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addannounce',
  templateUrl: './addannounce.component.html',
  styleUrls: ['./addannounce.component.css']
})
export class AddannounceComponent implements OnInit {
  constructor(private service: AppService, private router: Router) { }
  data: any
  
  form = new FormGroup({
    reference: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),

  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.createAnnounce(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}