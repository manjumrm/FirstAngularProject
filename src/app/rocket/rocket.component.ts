import { Component, OnInit } from '@angular/core';
import { RocketService } from '../rocket.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  constructor( private service:RocketService) { }

  ngOnInit() {
    console.log(this.service.rocketName);
    this.service.getSoil();
    
  }

}
