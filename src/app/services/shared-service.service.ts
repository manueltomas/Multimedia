import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Service message commands
  showAnimalList(b: boolean){
    this.emitChangeSource.next(b);
  }

  constructor() { }
}
