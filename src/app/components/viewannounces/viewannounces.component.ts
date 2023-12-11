import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewannounces',
  templateUrl: './viewannounces.component.html',
  styleUrls: ['./viewannounces.component.css']
})
export class ViewannouncesComponent implements OnInit {

announces: any[] | undefined
  url: string = "http://localhost:8091/query/announces/";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.announceList().subscribe(data => {
      this.announces = data;
    })
  }

  deleteAnnounce(id: String){
    this.service.deleteAnnounce(id).subscribe(data => {
      this.announces = this.announces?.filter(announce => announce.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateAnnounce(id: String){
    this.router.navigate(['update', id]);
  }

}