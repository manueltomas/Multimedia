import { Injectable } from '@angular/core';
import { ANIMALS } from './mock-animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animalsToShow;

  constructor() {
    this.animalsToShow = ANIMALS; 
  }

  getAnimals(){
    console.log(this.animalsToShow)
    return this.animalsToShow;
  }
  changeToAll(){
    this.animalsToShow = ANIMALS;
  }
  
  changeToWorld(world: any): any {
    var result = [];
    for(var i = 0; i < ANIMALS.length; i++){
      if(ANIMALS[i].world == world){
        result.push(ANIMALS[i])
      }
    }
    this.animalsToShow = result;
    console.log("animals to show: " + this.animalsToShow)
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
