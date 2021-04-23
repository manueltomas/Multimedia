import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalListComponent } from '../animal-list/animal-list.component';
import { AnimalService } from '../animal.service';
import { WorldService } from '../world.service';

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
  world;

  constructor(
    private route : ActivatedRoute,
    private worldService : WorldService,
    public animalService : AnimalService){}

  ngOnInit(){
    this.world = this.route.snapshot.paramMap.get('world');
    console.log("world: " + this.world);
    this.animalService.changeToWorld(this.world)
    var offsets = document.getElementById('imageContainer').getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
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

  onClickImage(){
    this.image = false;
    this.video1 = true;
    this.video2 = false;

    setTimeout(this.startVideo1, 10);

  }

  onClickVideo1(){
    this.image = false;
    this.video1 = false;
    this.video2 = true;
    this.animalService.setCatched(1);
    setTimeout(this.startVideo2, 10);
  }

  onClickVideo2(){
    this.image = true;
    this.video1 = false;
    this.video2 = false;
  }
  startVideo1(){
    var videoElem : any = document.getElementById("video1");
    videoElem.play();
  }

  startVideo2(){
    var videoElem : any = document.getElementById("video2");
    videoElem.play();
  }

  image = true;
  video1 = false;
  video2 = false;

  showImage(){
    return this.image;
  }

  showVideo1(){
    return this.video1;
  }

  showVideo2(){
    return this.video2;
  }

  current = 1;
  getImage(){
    return `assets/img/${this.worldService.getWorldById(this.world).name}${this.current}.png`
  }

  anteriorIndice(){
    this.current = ((this.current-1) % 5)
    if(this.current == 0){
      this.current = 4;
    }
  }

  proximoIndice(){
    this.current = ((this.current+1) % 5)
    if(this.current == 0){
      this.current++;
    }
  }
}
