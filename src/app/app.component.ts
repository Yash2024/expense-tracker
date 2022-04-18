import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exp_tracker';

  month:boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false];
  jan()
  {
    this.month[0]=!this.month[0];
  }

  feb()
  {
    this.month[1]=!this.month[1];
  }

  mar()
  {
    this.month[2]=!this.month[2];
  }

  apr()
  {
    this.month[3]=!this.month[3];
  }

  may()
  {
    this.month[4]=!this.month[4];
  }

  jun()
  {
    this.month[5]=!this.month[5];
  }

  jul()
  {
    this.month[6]=!this.month[6];
  }

  aug()
  {
    this.month[7]=!this.month[7];
  }

  sept()
  {
    this.month[8]=!this.month[8];
  }

  oct()
  {
    this.month[9]=!this.month[9];
  }

  nov()
  {
    this.month[10]=!this.month[10];
  }

  dec()
  {
    this.month[11]=!this.month[11];
  }
}


// function myfun(){
//   document.getElementById("menu").classList.toggle("show");
// }



