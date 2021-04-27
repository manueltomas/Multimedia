import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WORLDS } from '../mock-worlds';
import { WorldService } from '../world.service';


@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css']
})
export class WorldsComponent implements OnInit {
  
  current;
  
  constructor(
	private router : Router,
	private worldService : WorldService) { }

  ngOnInit(): void {
	  this.current = this.worldService.worldNumber;
	  if(this.current === undefined){
	  	this.current =  1;
	  }
	  console.log ("current ", this.current );
  }
  
  chooseWorld(){
	  this.router.navigate(['animation',WORLDS[0].id])
  }
    
  getWorld(){
    return `assets/img/${this.worldService.getWorldById(this.current).name}HubWorld.png`
  }
  
  getWorldName(){
	 return this.worldService.getWorldById(this.current).name
  }

  previousWorld(){
    this.current = ((this.current-1) % 4)
    if(this.current == 0){
      this.current = 3;
    }
  }

  nextWorld(){
    this.current = ((this.current+1) % 4)
    if(this.current == 0){
      this.current++;
    }
  }
}
