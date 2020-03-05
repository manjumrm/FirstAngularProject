import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstApp';
  // clickedAdd=(a,b)=>{
  //   console.log(a+b);
  // }

  isdisabled:boolean=false;
  a:number = 10;
  b:number = 20;

  add=(a,b)=>{
    console.log(this.a+this.b);
  }

  sub=(a,b)=>{
    console.log(this.a-this.b);
  }

  mul=(a,b)=>{
    console.log(this.a*this.b);
  }

  div=(a,b)=>{
    console.log(this.a/this.b);
  }
}
