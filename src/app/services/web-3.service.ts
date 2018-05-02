import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import BigNumber from 'bignumber.js';
const Web3 = require('web3');
// import * as Web3 from 'web3';;

@Injectable()
export class Web3Service {
  public web3: any;
  //private balance: string;
  accountfrom;
  toaccount;
  constructor() {
    //call a function
  }
  //connection
  web3connection(): boolean {
    // https://ropsten.infura.io/EtPXXiT2Z0TP47IHQl2D
    // https://mainnet.infura.io/ryE6emslW7ih4EhTyDSE
    this.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/ryE6emslW7ih4EhTyDSE"));
/** //for meta mask
    if(typeof this.web3!== "undefined"){
      
      this.web3 = new Web3(this.web3.currentProvider);
    }else {
      console.log("No web3? You should consider trying MetaMask!");
    }*/
    console.log(this.web3 + "function is called ");
    return true;
  
  }

  getbalance(ethaddress) {
    this.accountfrom = ethaddress;
    return this.web3.eth.getBalance(ethaddress)
      // .then(detail=>{
      //   return detail;
      //    //this.balance
      // })
      ;
    //      return this.balance;
  }

  create_ethAccounts() {
    // var object=this.web3.eth.personal.newAccount("pass",function(error,resp){
    //    if(error)
    //    {
    //      console.log("not created due to"+error);

    //    }else{
    //      console.log("created successfully");

    //    }
    // })
    const object = this.web3.eth.accounts.create();
    console.log(object.address);
    this.toaccount = object.address;
    // var object=this.web3.eth.personal.newAccount("pass");
    //console.log("account details"+object);
    // return object.address;

  }
  ethAccounts(): any {

    var accounts = this.web3.eth.getAccounts();
    console.log(accounts);
    // this.toaccount=accounts;
    return accounts;
  }

  sendamount(Ethbalance): any {

    var from =this.accountfrom ;
    var to =this.toaccount;
     var balanc=Ethbalance;
     console.log(balanc);
    // var balanc = this.web3.eth.getBalance(from);
    var gas = new BigNumber(21000);
    // You can use gasPrice=web3.eth.gasPrice or look up http://ethgasstation.info/
    var gasPrice = this.web3.utils.toWei('1', 'gWei');
   // var balance=this.web3.toBigNumber(balanc);// var balance=this.web3.toBigNumber(balanc);
    var balnce=parseInt(balanc);
   var balance=new BigNumber(balnce);
    
    var cost = gas.mul(gasPrice);
    var sendingAmount = balance.sub(cost);
   // var sendAmount=sendingAmount.toNumber();
    var tx = this.web3.eth.sendTransaction({ from: from, to: to, gas: gas, gasPrice: gasPrice, value: sendingAmount });
    console.log(this.web3.eth.getTransaction(tx));
  }
}
