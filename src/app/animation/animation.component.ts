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
  audio;

  constructor(
	private router : Router,
    private worldService : WorldService,
    public animalService : AnimalService){}

  ngOnInit(){
    //this get the position of div containg the video
    var offsets = document.getElementById('videoContainer').getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
	
    //this is used to restore the world being shown when the user returns from another page
    this.current = this.worldService.animationNumber;
      if(this.current === undefined){
        this.current =  1;
    }

    //this gets the video element and sets a onended listener that calls the "changeVideo()" function and plays the video afterwards
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

  /**
   * This method is called when the user clicks on the video
   */
  onClickVideo(){
    this.animalService.setCatched(1);
  }

  /**
   * This method is called when the user clicks the left arrow button
   * It changes the "current" variable to the previous position index, "notifies" the
   * world Service of this change, changes the value of the variable "rodandoEsquerda" to true
   * and calls "changeVideo()"
   */
  anteriorIndice(){
    this.current = this.previous()
    this.worldService.changeAnimation(this.current);
    this.rodandoEsquerda = true;
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
    if(this.current == 0){
      this.current++;
    }
    this.worldService.changeAnimation(this.current);
    this.rodandoDireita = true;
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
