import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { VolumeService } from '../volume.service';
import { WorldService } from '../world.service';


@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css']
})
export class WorldsComponent implements OnInit {

  //var that contains current world being shown
  current;

  //these two boolean vars are used when a transition between worlds (camera rotating) is hapening
  //when "rodandoEsquerda" is true it means we are turning left and when "rodandoDireita" is true
  //it means we are turning right
  rodandoEsquerda;
  rodandoDireita;

  changing = false;
  url;

  entering = 0;

  constructor(
	private router : Router,
	private worldService : WorldService,
	private animalService : AnimalService,
  public volumeService : VolumeService) { }

  ngOnInit(): void {
    //this is used to restore the world being shown when the user returns from another page
    this.current = this.worldService.worldNumber;
    if(this.current !== 0){
      this.entering = this.current;
    }else{
      this.current =  1;
    }
	this.changing = false;
    this.worldService.changeWorld(this.current)    

    //this calls the method that load the right video
    this.changeVideo()
	
  }
  
  /**
   * This method is called when the user clicks the button to choose the world
   * It loads the video walking in the direction of the world and, on it ends, changes
   * to the animation page
   */
  chooseWorld(){
    var videoAux : any = document.getElementById("video")
    var video : HTMLVideoElement = videoAux;
	this.url = `assets/video/worlds/worlds${this.current}into.mp4`
	this.changing = true;
	this.entering = 0
    var aux2 = this
    video.onended = function(){
	  console.log("A")
	  aux2.worldService.changeAnimation(0)
      aux2.router.navigate(['animation']);
    }
	
    video.load()
	
  }

  //This method was used when the world showed a picture
  /* getWorld(){
    return `assets/img/${this.worldService.getWorldById().name}HubWorld.png`
  }*/
  
  /**
   * This methods gets and returns the name of the world being shown
   * @returns The name of the world that is being shown
   */
  getWorldName(){
	 return this.worldService.getWorldById().name
  }

  /**
   * This method is called when the user clicks the left arrow button
   * It changes the "current" variable to the previous world index, "notifies" the
   * world and animal Services of this change, changes the value of the variable "rodandoEsquerda" to true
   * and calls "changeVideo()"
   */
  previousWorld(){
    this.current = this.previous()
    this.worldService.changeWorld(this.current)
    this.rodandoEsquerda = true;
    this.changing = true;
    this.changeVideo()
  }

  /**
   * This method calculates the previous world index
   * @returns The previous world index
   */
  previous(){
    var result = ((this.current-1) % 4)
    if(result <= 0){
      result = 3;
    }
    return result;
  }

  /**
   * This method is called when the user clicks the right arrow button
   * It changes the "current" variable to the next world index, "notifies" the
   * world and animal Services of this change, changes the value of the variable "rodandoDireita" to true
   * and calls "changeVideo()"
   */
  nextWorld(){
    this.current = this.next()
    this.worldService.changeWorld(this.current)
    this.rodandoDireita = true
    this.changing = true;
    this.changeVideo()
  }

  /**
   * This method calculates the next world index
   * @returns The next world index
   */
  next(){
    var result = ((this.current+1) % 4)
    if(result <= 0){
      result++;
    }
    return result;
  }

  /**
   * This method changes the video being presented to the user
   * It first verifies if "rodandoDireita" or "rodandoEsquerda" are true and
   * if one of them is true, it change to the video transition between the previous video being shown
   * and the video that is going to be shown and adds a listener to its end. When the video ends it
   * changes to the new video being shown
   * If none of them are true, the method simply set the video to be the current one
   * At the end of the method video.load() and video.play() are called to make the video be shown and played
   */
  changeVideo(){
    var sourceAux : any = document.getElementById("source")
    var source : HTMLSourceElement = sourceAux
    var videoAux : any = document.getElementById("video")
    var video : HTMLVideoElement = videoAux;
    var aux2 = this
    console.log(this.previous())
	
    if(this.rodandoDireita){
		
      source.src = `assets/video/worlds/worlds${this.previous()}${this.current}.mp4`
	  this.url = source.src
	  this.rodandoDireita = false
      this.animalService.refresh();
      video.onended = function(){
        source.src = `assets/video/worlds/worlds${aux2.current}.mp4`
		aux2.url = source.src
		aux2.changing = false;
        console.log(source.src)
        video.load()
        video.play()
      }
	  video.load()
	  video.play()
	  
    }else if(this.rodandoEsquerda){
      source.src = `assets/video/worlds/worlds${this.next()}${this.current}.mp4`
	  this.url = source.src
	  this.rodandoEsquerda = false
      this.animalService.refresh();
      video.onended = function(){
        source.src = `assets/video/worlds/worlds${aux2.current}.mp4`
		aux2.url = source.src
		aux2.changing = false;
        console.log(source.src)
        video.load()
        video.play()
      }
	  video.load()
	  video.play()
	}else if(this.changing){
		this.url = `assets/video/worlds/worlds${this.current}.mp4` 
		video.onended = function(){
			console.log("C")
			aux2.current = 1;
			aux2.url = `assets/video/worlds/worlds${aux2.current}.mp4` 
			video.currentTime = 0;
			video.load()
			video.play()
		}
    }else{
      source.src = `assets/video/worlds/worlds${this.current}.mp4` 
	  this.url = source.src

      video.onended = function(){
		console.log("B")
        aux2.animalService.refresh();
		video.currentTime = 0;
        video.play()
      }
	  video.play();
    }
  }
  
  timeUpdate(time){
    //console.log(time.target.currentTime)
    //console.log("entering: " + this.entering)
    var videoAux : any = document.getElementById("video")
    var video : HTMLVideoElement = videoAux;
    if(this.entering != 0 && Math.abs(time.target.currentTime - video.duration) < 0.001){
      this.url = `assets/video/worlds/worlds${this.current}.mp4` 
      video.currentTime = 0;
	  this.changing = false;
      video.load();
      video.play()
    }
    video.volume = this.volumeService.volume/100;
  }
  
  /**
   * This method is called when the user clicks the back button
   * It simply navigates to the main menu
   */
  backToMainMenu(){
	  this.router.navigate([''])
  }
  
  getVideoUrl(){
    return this.url
  }
}
