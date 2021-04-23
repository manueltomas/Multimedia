import { Injectable } from '@angular/core';
import { WORLDS } from './mock-worlds';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor() { }

  getWorldById(id){
    // console.log("id: " + id)
    // console.log("worlds: " + WORLDS)
    // console.log("worlds filtered: " + WORLDS.filter(function(w){
    //   console.log("worldid: " + w.id)
    //   w.id == id
    // }))
    var result;
    for(var i = 0; i < WORLDS.length; i++){
      if(WORLDS[i].id == id){
        result = WORLDS[i]
      }
    }
    return result;
  }
}
