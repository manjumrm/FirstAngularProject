import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor() {
    console.log('this is constructor of register');
   }

  ngOnInit() {
    console.log("this is ng of init");
  }

  ngOnDestroy(){
    console.log("this is destroy stage")
  }

}
