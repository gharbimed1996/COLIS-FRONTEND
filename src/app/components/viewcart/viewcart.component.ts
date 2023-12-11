import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  users: any[] | undefined
    url: string = "http://localhost:8090/query/cart/list";
  
    constructor(private service: AppService, private router: Router) { 
     
    }
  
    ngOnInit(): void {
      this.service.getcart().subscribe(data => {
        this.users = data;
      })
    }
  }