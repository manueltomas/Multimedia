import { Injectable } from '@angular/core';
import { ANIMALS } from './mock-animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalInfoService {

  animal;
  
  constructor() { }
  
  changeAnimal(a){
	this.animal = a;  
  }
}
