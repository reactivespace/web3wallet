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
 //connection
  web3connection():boolean{
    // https://ropsten.infura.io/EtPXXiT2Z0TP47IHQl2D
  this.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/ryE6emslW7ih4EhTyDSE"));
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
    var object=this.web3.eth.personal.newAccount("pass",function(error,resp){
       if(error)
       {
         console.log("not created due to"+error);

       }else{
         console.log("created successfully");

       }
    })
    // console.log(this.web3.eth.accounts.create());
    // var object=this.web3.eth.personal.newAccount("pass");
    // console.log("account details"+object);
    // return object;
  
   }
   ethAccounts(): any{
     
    var accounts =this.web3.eth.getAccounts();
    console.log(accounts);
      return accounts;
   }
}
