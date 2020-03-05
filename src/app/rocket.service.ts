import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  rocketName = 'GSLV4';
  constructor() { }
  getSoil(){
    console.log("got it");
  }
}
