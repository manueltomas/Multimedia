import { Injectable } from '@angular/core';
import { WORLDS } from './mock-worlds';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  worldNumber = 1;
  animationNumber = 1;
  
  constructor() { }

  getWorldById(){
    // console.log("id: " + id)
    // console.log("worlds: " + WORLDS)
    // console.log("worlds filtered: " + WORLDS.filter(function(w){
    //   console.log("worldid: " + w.id)
    //   w.id == id
    // }))
    var result;
    for(var i = 0; i < WORLDS.length; i++){
      if(WORLDS[i].id == this.worldNumber){
        result = WORLDS[i]
      }
    }
    return result;
  }
  changeWorld(id){
    this.worldNumber = id;
  }
  
  changeAnimation(id){
	this.animationNumber = id;
  }
}
