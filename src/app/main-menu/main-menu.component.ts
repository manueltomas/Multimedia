import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { SharedService } from '../services/shared-service.service';
import { WorldService } from '../world.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(
	private worldService : WorldService,
	private animalService : AnimalService,
	private router : Router,
  private _sharedService: SharedService ){
    this._sharedService.showAnimalList(false);
  }

  ngOnInit(): void {
	  this.worldService.changeWorld(0)
	  this.animalService.refresh();
  }
  
  start(){
    this.router.navigate(['worlds'])
    this._sharedService.showAnimalList(true);
  }
}
