import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

 const Web3= require('web3');
// import * as Web3 from 'web3';;

@Injectable()
export class Web3Service {
 public web3: any;
private balance:string;
  constructor() {
    //call a function
   }
 
  web3connection():boolean{
  this.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/EtPXXiT2Z0TP47IHQl2D"));
  console.log(this.web3 + "function is called ");
  return true;
  }
  
  getbalance(ethaddress){
    return   this.web3.eth.getBalance(ethaddress)
        // .then(detail=>{
        //   return detail;
        //    //this.balance
        // })
        ;  
  //      return this.balance;
  }
  
   create_ethAccounts(){
     
    var object=this.web3.eth.accounts.create();
    console.log("account details"+object);
    return object;
  
   }
   ethAccounts(){
    var accounts =this.web3.eth.accounts;
      console.log(accounts);
      return accounts;
   }
}
