import { Component, ElementRef, ViewChild } from '@angular/core';
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
  
  //var that contains current world being shown
  current;

  //These two boolean vars are used when a transition between positions (camera rotating) is hapening
  //When "rodandoEsquerda" is true it means we are turning left and when "rodandoDireita" is true
  //it means we are turning right
  rodandoDireita = false;
  rodandoEsquerda = false;

  //TODO: this variable is not being used, but it is planned to be used when the audio is added
  audio : HTMLAudioElement;

  changing = true;
  url;

  animalsInPage = [];

  constructor(
	private router : Router,
    private worldService : WorldService,
    public animalService : AnimalService){}

  ngOnInit(){
    //this get the position of div containg the video
    var container = document.getElementById('videoContainer');
    var offsets = container.getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
	
    //this is used to restore the world being shown when the user returns from another page
    this.current = this.worldService.animationNumber;
    this.animalsInPage = this.animalService.getAnimalForPage(this.current);
	console.log(this.current)
    /*if(this.current === 0){
		this.arriveNewWorldVideo()
    }*/
    this.changeVideo();

    //this gets the video element and sets a onended listener that calls the "changeVideo()" function and plays the video afterwards
      
      console.log("Div in position (" + left + "," + top + ")");
      var aux = this;
      window.onmousemove = function(e){
            x = e.clientX-left,
            y = -(e.clientY-top);
            x /= container.clientWidth;
            y /= container.clientHeight;
            console.log("Mouse in position (" + x + "," + y + ")");
            
            for(var i = 0; i < aux.animalsInPage.length; i++){
              var animalx = aux.animalsInPage[i].x;
              var animaly = aux.animalsInPage[i].y;
              var distance = Math.abs(aux.distance(x,y,animalx,animaly));
              if(distance < 0.2){
                aux.playAudio(i);
                aux.audio.volume = 1 - (distance / 0.2);
                console.log("volume setted to: " + aux.audio.volume);
                aux.audio.play();
              }else{
                console.log("audio paused");
                aux.audio.pause();
              }
              if(distance < 0.06){
                console.log("You are hoovering the " + aux.animalsInPage[i].name);
                this.onTop = true;
              }else{
                this.onTop = false;
              }
            }
      };
  }

  playAudio(animal){
    if(this.audio == undefined){
      this.audio = new Audio();
    }
    //TODO: use animal to get the respective sound
    if(this.audio.paused){
      this.audio.src = "../../../assets/sounds/" + this.animalsInPage[animal].name + ".mp3";
      this.audio.load();
      this.audio.play();
    }
  }

  /**
   * This method is called when the user clicks on the video
   */
  onClickVideo(){
    this.changing = true;
    var sourceAux : any = document.getElementById("source")
    var source : HTMLSourceElement = sourceAux
    var videoAux : any = document.getElementById("video")
    var video : HTMLVideoElement = videoAux;
    var aux2 = this
    var last = source.src;
    source.src = `assets/video/${this.worldService.getWorldById().name}/catch1.mp4`
	this.url = source.src
    video.load();
    video.play()
    video.onended = function(){
      aux2.animalService.setCatched(1);
      source.src = last;
      video.load();
      video.play()
      aux2.changing = false;
    }
  }

  /**
   * This method is called when the user clicks the left arrow button
   * It changes the "current" variable to the previous position index, "notifies" the
   * world Service of this change, changes the value of the variable "rodandoEsquerda" to true
   * and calls "changeVideo()"
   */
  anteriorIndice(){
    this.current = this.previous()
    this.animalsInPage = this.animalService.getAnimalForPage(this.current);
    this.worldService.changeAnimation(this.current);
    this.rodandoEsquerda = true;
    this.changing = true;
    this.changeVideo()
  }
  
  /**
   * This method calculates the previous position index
   * @returns The previous world index
   */
  previous(){
    var result = ((this.current-1) % 5)
    if(result <= 0){
      result = 4;
    }
    return result;
  }

  /**
   * This method is called when the user clicks the right arrow button
   * It changes the "current" variable to the next position index, "notifies" the
   * world Service of this change, changes the value of the variable "rodandoDireita" to true
   * and calls "changeVideo()"
   */
  proximoIndice(){
    this.current = ((this.current+1) % 5)
    this.animalsInPage = this.animalService.getAnimalForPage(this.current);
    if(this.current == 0){
      this.current++;
    }
    this.worldService.changeAnimation(this.current);
    this.rodandoDireita = true;
    this.changing = true;
    this.changeVideo()
  }
  
  /**
   * This method calculates the previous position index
   * @returns The previous world index
   */
  next(){
    var result = ((this.current+1) % 5)
    if(result <= 0){
      result++;
    }
    return result;
  }

  /**
   * This method is called when the user clicks the back button
   * It simply navigates to the world choice menu
   */
  returnToHub(){
      var videoAux : any = document.getElementById("video")
      var video : HTMLVideoElement = videoAux
	  this.worldService.changeAnimation(0)
	  this.router.navigate(['worlds'])
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
    if(this.rodandoDireita){
      source.src = `assets/video/${this.worldService.getWorldById().name}/${this.previous()}${this.current}.mp4`
      this.url = `assets/video/${this.worldService.getWorldById().name}/${this.previous()}${this.current}.mp4`
	    video.onended = function(){
        if(aux2.rodandoDireita){
          source.src = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`
		      aux2.url = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`
          aux2.rodandoDireita = false
          console.log(aux2.url)
          video.load();
          video.play()
        }else{
          video.currentTime = 0;
          video.play();
        }
        aux2.changing = false;
      }
      video.load()
      video.play()
    }else if(this.rodandoEsquerda){
      source.src = `assets/video/${this.worldService.getWorldById().name}/${this.next()}${this.current}.mp4`
      this.url = `assets/video/${this.worldService.getWorldById().name}/${this.next()}${this.current}.mp4`
	  video.onended = function(){
        if(aux2.rodandoEsquerda){
          source.src = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`
		      aux2.url = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`
          aux2.rodandoEsquerda = false
          console.log(aux2.url)
          video.load();
          video.play()
        }else{
          video.currentTime = 0;
          video.play();
        }
        aux2.changing = false;
      }
      video.load()
		  video.play()
    }else if(this.changing){
      console.log("im here")
      this.url = `assets/video/${this.worldService.getWorldById().name}/${this.current}.mp4`
      video.onended = function(){
        console.log("im here")
        aux2.current = 1;
        aux2.url = `assets/video/${aux2.worldService.getWorldById().name}/${aux2.current}.mp4`
		    video.currentTime = 0;
        video.load();
        video.play()
      }
      console.log(video.onended)
    }else{
      source.src = `assets/video/${this.worldService.getWorldById().name}/${this.current}.mp4`
	    this.url = `assets/video/${this.worldService.getWorldById().name}/${this.current}.mp4`
      video.onended = function(){
		    video.currentTime = 0;
        video.load();
        video.play()
      }
      video.play();
    }
    console.log(aux2.url)
  }

  timeUpdate(time){
    //console.log(time.target.currentTime)
    var videoAux : any = document.getElementById("video")
    var video : HTMLVideoElement = videoAux;
    //console.log(video.duration);
    if(this.current == 0 && Math.abs(time.target.currentTime - video.duration) < 0.001){
      //console.log("im here")
      this.current = 1;
      this.changing = false;
      this.changeVideo();
    }
  }
  
  /*arriveNewWorldVideo(){
    var videoAux : any = document.getElementById("video")
    var video : HTMLVideoElement = videoAux;
    var aux = this
    video.onloadstart = function(){
      console.log("im here")
      video.onended = function(){
        console.log("im here")
        aux.changing = false;
        aux.current =  1;
        aux.worldService.changeAnimation(aux.current)
        aux.changeVideo()
      }	
    }
    this.url = `assets/video/${this.worldService.getWorldById().name}/${this.current}.mp4`
    console.log(this.url)
    
    
  }*/

  distance(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
  }
  
  getVideoUrl(){
    return this.url
  }
}
