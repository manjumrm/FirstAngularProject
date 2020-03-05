import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  constructor() { }
  @Input() task

  //step 1

  result = "Task is completed";

  //step 2
 @Output() submit =new EventEmitter();
  ngOnInit() {
    console.log(this.task);
    this.submit.emit(this.result);
  }

}
