import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalListComponent } from '../animal-list/animal-list.component';
import { AnimalService } from '../animal.service';
import { WorldService } from '../world.service';
import { Router } from '@angular/router';


var x : number;
var y : number;
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent {
  @ViewChild('video1') myVideo: ElementRef;
  title = 'Multimedia';
  audio;
  onTop;
  rodandoDireita = false;
  rodandoEsquerda = false;
  
  current;

  constructor(
	private router : Router,
    private route : ActivatedRoute,
    private worldService : WorldService,
    public animalService : AnimalService){}

  ngOnInit(){
    var offsets = document.getElementById('imageContainer').getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
	
	this.current = this.worldService.animationNumber;
	  if(this.current === undefined){
	  	this.current =  1;
	}
  var videoAux : any = document.getElementById("video")
  var video : HTMLVideoElement = videoAux;
  var aux = this
  video.onended = function(){
    aux.changeVideo()
    video.play();
  }	  
    //console.log("Div in position (" + left + "," + top + ")");
    // window.onmousemove = function(e){
    //       x = e.clientX-left,
    //       y = e.clientY-top;
    //       console.log("Mouse in position (" + x + "," + y + ")");
    //       if(this.audio == undefined){
    //         this.audio = new Audio();
    //       }
    //       if(x > 1100-left && x < 1300-left && y > 600-top && y < 800-top){
    //         if(!this.onTop){
    //           this.audio.src = "../../../assets/sounds/Sia - Cheap Thrills (Lyric Video) ft. Sean Paul.mp3";
    //           this.audio.load();
    //           this.audio.play();
    //         }
    //         console.log("You are hoovering the light");
    //         this.onTop = true;
    //       }else{
    //         this.onTop = false;
    //         this.audio.pause();
    //       }
    // };
  }

  onClickVideo(){
    this.animalService.setCatched(1);
  }

  getImage(){
    return `assets/img/${this.worldService.getWorldById().name}${this.current}.png`
  }

  anteriorIndice(){
    this.current = this.previous()
	this.worldService.changeAnimation(this.current);
  this.rodandoEsquerda = true;
  this.changeVideo()
  }
  

  previous(){
    var result = ((this.current-1) % 5)
    if(result <= 0){
      result = 4;
    }
    return result;
  }

  proximoIndice(){
    this.current = ((this.current+1) % 5)
    if(this.current == 0){
      this.current++;
    }
	this.worldService.changeAnimation(this.current);
  this.rodandoDireita = true;
  this.changeVideo()
  }
  
  next(){
    var result = ((this.current+1) % 5)
    if(result <= 0){
      result++;
    }
    return result;
  }

  returnToHub(){
	  this.router.navigate(['worlds'])
  }

  changeVideo(){
    var sourceAux : any = document.getElementById("source")
    var source : HTMLSourceElement = sourceAux
    var videoAux : any = document.getElementById("video")
    var video : HTMLVideoElement = videoAux;
    var aux2 = this
    if(this.rodandoDireita){
      source.src = `assets/video/${this.worldService.getWorldById().name}/${this.previous()}${this.current}.mp4`
      video.onended = function(){
        source.src = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`
        aux2.rodandoDireita = false
        console.log(source.src)
        video.load();
        video.play()
      }
    }else if(this.rodandoEsquerda){
      source.src = `assets/video/${this.worldService.getWorldById().name}/${this.next()}${this.current}.mp4`
      video.onended = function(){
        source.src = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`
        aux2.rodandoEsquerda = false
        console.log(source.src)
        video.load();
        video.play()
      }
    }else{
      source.src = `assets/video/${this.worldService.getWorldById().name}/${this.current}.mp4` 
      /*video.onended = function(){
        source.src = `assets/video/worlds/worlds${aux2.current}.mp4`
        console.log(source.src)
        video.load();
        video.play()
      }*/
    }
    video.load();
    video.play()
    console.log(source.src)
  }
}
