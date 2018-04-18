import { Component } from '@angular/core';
import { Web3Service} from './services/web-3.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  Web3Service: any;
  title = 'ETH Connection';
  address="";
  Ethbalance: string;
  accont;
  constructor(private web3Service:Web3Service)
  {
    //call function
    this.getaccount();
  }

  getaccount(){
   if(this.web3Service.web3connection()){
    console.log("connection successful");
    // this.web3Service.balance();
    // this.web3Service.ethAccounts();
  }
   else{
     console.log("error in connection");
   }
}
//create ether account
generateAcc(){
  this.web3Service.create_ethAccounts().subsribe(object=>{
    this.address=object.address;
  });
}

// get balance of an ether account 
getbalance(ethaddress){
  //call func and pass the address 
this.web3Service.getbalance(ethaddress).then(x=>{
  this.Ethbalance=x
});
  console.log(this.Ethbalance);
  

}
  
// all accounts 
displayAccounts(){
  this.web3Service.ethAccounts().subsribe(acc=>{
   this.accont=acc;
  })
}
}
