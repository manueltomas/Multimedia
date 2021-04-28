import { Injectable } from '@angular/core';
import { ANIMALS } from './mock-animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animalsToShow;

  local;

  constructor() {
    this.animalsToShow = ANIMALS; 
  }

  getAnimals(){
    console.log(this.animalsToShow)
    if(this.local){
      return this.animalsToShow;
    }else{
      return ANIMALS;
    }
  }
  showAll(){
    this.local = false;
  }
  
  changeToWorld(world: number): any {
    var result = [];
    for(var i = 0; i < ANIMALS.length; i++){
      if(ANIMALS[i].world == world){
        result.push(ANIMALS[i])
      }
    }
    this.animalsToShow = result;
    console.log("animals to show: " + this.animalsToShow)
  }

  showWorld(){
    this.local = true;
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
