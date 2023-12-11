import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addcolis',
  templateUrl: './addcolis.component.html',
  styleUrls: ['./addcolis.component.css']
})
export class addcolisComponent implements OnInit {
  constructor(private service: AppService, private router: Router) { }
  data: any
  selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
	}
  
  form = new FormGroup({
    matricule: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),

  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.adduser(this.data).subscribe(data => {
      console.log(data)
    });
    this.router.navigate(['/addcart']);
  }
}