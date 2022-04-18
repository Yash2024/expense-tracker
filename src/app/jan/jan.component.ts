import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { expense } from 'src/expense.model';
@Component({
  selector: 'app-jan',
  templateUrl: './jan.component.html',
  styleUrls: ['./jan.component.css']
})
export class JanComponent implements OnInit {

  dsp: number = 1;
  exp: expense = { expid: 0, date: "", name: "", desc: "", amount: null, btn: true };
  total!: number;
  explist: expense[] = [];
  localitem!: string | null;
  constructor() {
    this.localitem = localStorage.getItem("janexplist");
    if (this.localitem == null) {
      this.explist = [];
    }
    else {
      this.explist = JSON.parse(this.localitem);
    }
  }

  ngOnInit(): void {
    this.calctot()
  }

  //update
  setsave(i: number) {
    this.explist[i].btn = false;
    // document.getElementById("text")?.disabled=false;
  }

  saveexp(exp: expense, i: number) {
    if (exp.amount === 0 || exp.amount === null) {
      alert("please enter the amount");
    }
    else if (exp.desc === "") {
      alert("please enter the description");
    }
    else if (exp.name === "") {
      alert("please enter the name");
    }
    else if (exp.date === "" || exp.date === "mm/dd/yyyy") {
      alert("please enter the date");
    }
    else {
      this.explist[i] = exp;
      this.explist[i].btn = true;
      localStorage.setItem("janexplist", JSON.stringify(this.explist));
      this.calctot();
    }
  }


  //ADD NEW
  newslot: boolean = false;

  addslot() {
    this.newslot = true;
  }

  addexpense() {

    var expd = Object.assign({}, this.exp);
    if (expd.amount === 0 || expd.amount === null) {
      alert("please enter the amount");
    }
    else if (expd.desc === "") {
      alert("please enter the description");
    }
    else if (expd.name === "") {
      alert("please enter the name");
    }
    else if (expd.date === "" || expd.date === "mm/dd/yyyy") {
      alert("please enter the date");
    }
    else {
      expd.expid = 1000 + this.explist.length;
      expd.btn = true;
      this.explist.push(expd);
      this.exp = { expid: 0, date: "", name: "", desc: "", amount: null, btn: true };
      localStorage.setItem("janexplist", JSON.stringify(this.explist));
      this.newslot = false;
      this.calctot();
    }
  }

  cancel() {
    this.newslot = false;
  }
  //Delete

  deleteexpense(id: number) {
    this.explist = this.explist.filter(x => x.expid != id);
    localStorage.setItem("janexplist", JSON.stringify(this.explist));
  }

  //calculate total expense
  calctot() {
    this.total = 0;
    for (let i = 0; i < this.explist.length; i++) {
      if (this.explist[i].amount != null) {
        this.total += (this.explist[i].amount) as number;
      }
    }
  }
}
