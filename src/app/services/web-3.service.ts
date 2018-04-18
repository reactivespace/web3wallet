import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

 const Web3= require('web3');
// import * as Web3 from 'web3';;

@Injectable()
export class Web3Service {
 public web3: any;

  constructor() {
    //call a function
   }
 
  web3connection():boolean{
  this.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/EtPXXiT2Z0TP47IHQl2D"));
  console.log(this.web3 + "function is called ");
  return true;
  }
  
  balance(){
  this.web3.eth.getBalance("0xdc8F20170C0946ACCF9627b3EB1513CFD1c0499f")
     .then(console.log);  

  }
   ethAccounts(){
     
    var object=this.web3.eth.accounts.create();
    // this.web3.eth.getAccounts()
    // .then(console.log);
    console.log(object);
  
   }
}
