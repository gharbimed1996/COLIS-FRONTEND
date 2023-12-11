import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Announce } from 'src/app/Announce';

@Component({
  selector: 'app-updateannounce',
  templateUrl: './updateannounce.component.html',
  styleUrls: ['./updateannounce.component.css']
})
export class UpdateannounceComponent implements OnInit {

  announce?: Announce
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getAnnounce(id).subscribe(data => {
      this.announce = data
      console.log(this.announce)
    })
  }

  form = new FormGroup({
    reference: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateAnnounce(this.announce?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}