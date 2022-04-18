import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  month:boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false];
  // month:boolean[]=[true,true,true,true,true,true,true,true,true,true,true,true];
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
