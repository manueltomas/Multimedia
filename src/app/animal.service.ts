import { Injectable } from '@angular/core';
import { ANIMALS } from './mock-animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  getAnimals(){
    return ANIMALS
  }

  getAnimal(id){
    return ANIMALS.filter(function(an){
      an.id == id
    })[0]
  }

  setCatched(id){
    ANIMALS.map(function(an){
      if(an.id == id){
        an.catched = true;
      }
    })
  }

  isCatched(id){
    return this.getAnimal(id).catched
  }
}
