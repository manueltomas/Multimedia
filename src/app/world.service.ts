import { Injectable } from '@angular/core';
import { WORLDS } from './mock-worlds';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  worldNumber = 0;
  animationNumber = 1;
  
  private _animalListPosition = "left";
  private animalListPositionChange$ = new Subject<string>();
  public animalListPosition$ = this.animalListPositionChange$.asObservable();

  set animalListPosition (val: string) {
    console.log(val);
    this._animalListPosition = val;
    this.animalListPositionChange$.next(val); // Trigger the subject, which triggers the Observable
  }

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
