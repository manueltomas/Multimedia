import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
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
	private router : Router) { }

  ngOnInit(): void {
	this.worldService.changeWorld(0)
	this.animalService.refresh();
  }
  
  start(){
	this.router.navigate(['worlds'])
  }

}
