import { Component } from '@angular/core';
import { Web3Service} from './services/web-3.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  Web3Service: any;
  title = 'app';
  constructor(private web3Service:Web3Service)
  {
    //call function
    this.getaccount();
  }

  getaccount(){
   if(this.web3Service.web3connection()){
    console.log("connection successful");
    this.web3Service.balance();
    this.web3Service.ethAccounts();
  }
   else{
     console.log("error in connection");
   }
}
  
}
