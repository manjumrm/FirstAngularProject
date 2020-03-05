import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  homeWork:string="Angular";
  constructor() { }

  ngOnInit() {
  }
  recieve(result){
    console.log(result);
  }

}
