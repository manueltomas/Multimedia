import { Injectable } from '@angular/core';
import { ANIMALS } from './mock-animals';
import { WorldService } from './world.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  
  animalsToShow;

  local;

  constructor(private worldService : WorldService) {
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

  showWorld(){
    this.refresh();
    this.local = true;
  }
  
  refresh() {
    var result = [];
    for(var i = 0; i < ANIMALS.length; i++){
      if(ANIMALS[i].world == this.worldService.worldNumber){
        result.push(ANIMALS[i])
      }
    }
    this.animalsToShow = result;
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
