import { Component, OnInit } from '@angular/core';
import { expense } from 'src/expense.model';

@Component({
  selector: 'app-jun',
  templateUrl: './jun.component.html',
  styleUrls: ['./jun.component.css']
})
export class JunComponent implements OnInit {

  exp: expense={expid:0,date:"",name:"",desc:"",amount:0,btn:true};
  total: number=0;
  explist : expense[]=[];
  localitem!: string|null;
  constructor() { 
    this.localitem=localStorage.getItem("junexplist");
    if(this.localitem==null)
    {
      this.explist=[];
    }
    else{
      this.explist=JSON.parse(this.localitem);
    }
  }

  ngOnInit(): void {
  }
 
  //update
  setsave(i:number)
  {
      this.explist[i].btn=false;
  }

  saveexp(exp:expense,i:number)
  {
    this.explist[i]=exp;
    this.explist[i].btn=true;
    localStorage.setItem("junexplist",JSON.stringify(this.explist));
  }


  //ADD NEW
  newslot:boolean=false;

  addslot()
  {
    this.newslot=true;
  }

  addexpense()
  {
    
    var expd= Object.assign({},this.exp);
    expd.expid=6000+this.explist.length;
    expd.btn=true;
    this.explist.push(expd);
    this.exp={ expid: 0,date:"",name: "",desc:"", amount: 0,btn:true};
    localStorage.setItem("junexplist",JSON.stringify(this.explist));
    this.newslot=false;
  }

  //Delete

  deleteexpense(id:number)
  {
    this.explist=this.explist.filter(x =>x.expid !=id);
    localStorage.setItem("junexplist",JSON.stringify(this.explist));
  }

  calctot()
  {
    this.total=0;
    for(let i=0;i<this.explist.length;i++)
    {
      if (this.explist[i].amount != null) {
        this.total += (this.explist[i].amount) as number;
      }
    }
  }
}
