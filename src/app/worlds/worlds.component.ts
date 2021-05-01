import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
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
	private worldService : WorldService,
	private animalService : AnimalService) { }

  ngOnInit(): void {
	  this.current = this.worldService.worldNumber;
	  if(this.current === undefined){
	  	this.current =  1;
	  }
	  console.log ("current ", this.current );

    // var videoAux : any = document.getElementById("video")
    // var video : HTMLVideoElement = videoAux
    // video.currentTime = 11.7206
    // var animation = video.animate(
    //   [
    //     {currentTime: 11.7206},
    //     {currentTime: 0}
    //   ],
    //   {
    //     duration: 1
    //   }
    // )
    // animation.currentTime = animation.effect.timing.duration / 2;
    // animation.playbackRate = 1;
    // animation.play();

    /*console.log(video)
    var intervalRewind;
    video.currentTime = 11.7206;
    video.playbackRate = 1;
    intervalRewind = setInterval(function(){
       if(video.currentTime == 0){
           clearInterval(intervalRewind);
           video.pause();
       }
       else{
           video.currentTime += -.01;
       }
      },1);*/
  }
  
  chooseWorld(){
	  this.worldService.changeAnimation(1);
	  this.router.navigate(['animation']);
  }
    
  getWorld(){
    return `assets/img/${this.worldService.getWorldById().name}HubWorld.png`
  }
  
  getWorldName(){
	 return this.worldService.getWorldById().name
  }

  previousWorld(){
    this.current = ((this.current-1) % 4)
    if(this.current == 0){
      this.current = 3;
    }
    this.worldService.changeWorld(this.current)
    this.animalService.refresh();
  }

  nextWorld(){
    this.current = ((this.current+1) % 4)
    if(this.current == 0){
      this.current++;
    }
    this.worldService.changeWorld(this.current)
    this.animalService.refresh();
  }
}
