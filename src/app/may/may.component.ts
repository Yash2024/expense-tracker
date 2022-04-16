import { Component, OnInit } from '@angular/core';
import { expense } from 'src/expense.model';

@Component({
  selector: 'app-may',
  templateUrl: './may.component.html',
  styleUrls: ['./may.component.css']
})
export class MayComponent implements OnInit {

  exp: expense={expid:0,date:"",name:"",desc:"",amount:0,btn:1};
  total: number=0;
  explist : expense[]=[];
  localitem!: string|null;
  constructor() { 
    this.localitem=localStorage.getItem("explist");
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
      this.explist[i].btn=0;
  }

  saveexp(exp:expense,i:number)
  {
    this.explist[i]=exp;
    this.explist[i].btn=1;
    localStorage.setItem("explist",JSON.stringify(this.explist));
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
    expd.expid=1000+this.explist.length;
    expd.btn=1;
    this.explist.push(expd);
    this.exp={ expid: 0,date:"",name: "",desc:"", amount: 0,btn:1};
    localStorage.setItem("explist",JSON.stringify(this.explist));
    this.newslot=false;
  }

  //Delete

  deleteexpense(id:number)
  {
    this.explist=this.explist.filter(x =>x.expid !=id);
    localStorage.setItem("explist",JSON.stringify(this.explist));
  }

}
