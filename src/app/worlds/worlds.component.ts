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
  source : HTMLSourceElement;
  video : HTMLVideoElement;

  rodandoEsquerda;
  rodandoDireita;

  constructor(
	private router : Router,
	private worldService : WorldService,
	private animalService : AnimalService) { }

  ngOnInit(): void {
	this.current = this.worldService.worldNumber;
	if(this.current === 0){
		this.current =  1;
	}
	this.worldService.changeWorld(this.current)
	this.animalService.refresh();

    var source : any = document.getElementById("source")
    this.source = source
    var videoAux : any = document.getElementById("video")
    this.video = videoAux;
	this.video.play()
    this.changeVideo()
	
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
    this.current = this.previous()
    this.worldService.changeWorld(this.current)
    this.animalService.refresh();
    this.rodandoEsquerda = true;
    this.changeVideo()
  }

  previous(){
    var result = ((this.current-1) % 4)
    if(result <= 0){
      result = 3;
    }
    return result;
  }

  nextWorld(){
    this.current = this.next()
    this.worldService.changeWorld(this.current)
    this.animalService.refresh();
    this.rodandoDireita = true
    this.changeVideo()
  }

  next(){
    var result = ((this.current+1) % 4)
    if(result <= 0){
      result++;
    }
    return result;
  }

  changeVideo(){
    var sourceAux : any = document.getElementById("source")
    var source : HTMLSourceElement = sourceAux
    var videoAux : any = document.getElementById("video")
    var video : HTMLVideoElement = videoAux;
    var aux2 = this
    console.log(this.previous())
    video.pause();
    if(this.rodandoDireita){
      console.log(`assets/video/worlds/worlds${this.previous()}${this.current}.mp4`)
      source.src = `assets/video/worlds/worlds${this.previous()}${this.current}.mp4`
      video.onended = function(){
        source.src = `assets/video/worlds/worlds${aux2.current}.mp4`
        aux2.rodandoDireita = false
        console.log(source.src)
        video.load();
        video.play()
      }
    }else if(this.rodandoEsquerda){
      source.src = `assets/video/worlds/worlds${this.current}${this.next()}.mp4`
      video.onended = function(){
        source.src = `assets/video/worlds/worlds${aux2.current}.mp4`
        aux2.rodandoEsquerda = false
        console.log(source.src)
        video.load();
        video.play()
      }
    }else{
      source.src = `assets/video/worlds/worlds${this.current}.mp4` 
    }
    /*video.onended = function(){
      source.src = `assets/video/worlds/worlds${aux2.current}.mp4`
      console.log(source.src)
      video.load();
      video.play()
    }*/
    video.load();
    video.play()
    console.log(source.src)
  }
  
  backToMainMenu(){
	this.router.navigate([''])
  }
}
