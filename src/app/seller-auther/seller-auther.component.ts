import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-auther',
  templateUrl: './seller-auther.component.html',
  styleUrls: ['./seller-auther.component.css']
})
export class SellerAutherComponent {
  showLogin=false;

Nagesh=new FormGroup({
  Name:new FormControl(''),
  Password:new FormControl(''),
  Email:new FormControl('')
})
SellerAuth=new FormGroup({
  Name:new FormControl(''),
  Password:new FormControl(''),

})
constructor(){}



loginFun(){
  this.showLogin=true
}
singupFun(){
  this.showLogin=false
}

}
