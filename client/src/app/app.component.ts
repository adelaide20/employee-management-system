import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'EMS';

  user : any;

  ngOnInit(): void {
   this.user = JSON.parse(localStorage.getItem('user') || '')

   console.log(this.user);
   
  }

}
