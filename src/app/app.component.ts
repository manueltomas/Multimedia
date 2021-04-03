import { Component, ElementRef, ViewChild } from '@angular/core';

var x : number;
var y : number;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('video1') myVideo: ElementRef;
  title = 'Multimedia';
  audio;
  onTop;

  ngOnInit(){
    var offsets = document.getElementById('imageContainer').getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
    //console.log("Div in position (" + left + "," + top + ")");
    window.onmousemove = function(e){
          x = e.clientX-left,
          y = e.clientY-top;
          console.log("Mouse in position (" + x + "," + y + ")");
          if(this.audio == undefined){
            this.audio = new Audio();
          }
          if(x > 1100-left && x < 1300-left && y > 600-top && y < 800-top){
            if(!this.onTop){
              this.audio.src = "../../../assets/sounds/Sia - Cheap Thrills (Lyric Video) ft. Sean Paul.mp3";
              this.audio.load();
              this.audio.play();
            }
            console.log("You are hoovering the light");
            this.onTop = true;
          }else{
            this.onTop = false;
            this.audio.pause();
          }
    };
  }

  onClick(){
    this.image = false;
    this.video = true;

    var source = document.createElement("source");
    source.src = "assets/video/Cropped.mp4";
    source.type = "video/mp4";
    var newVideo = document.createElement("video");
    newVideo.width = 1440;
    newVideo.height = 720;
    newVideo.classList.add("image");
    newVideo.id = "video";
    newVideo.appendChild(source);
    var div = document.getElementById("imageContainer")
    div.appendChild(newVideo)
    newVideo.play();

    //this.myVideo.nativeElement.play()
    /*var div = document.getElementById("imageContainer")
    console.log(div.innerHTML);
    //var x = div.firstElementChild;
    var v : any = document.getElementById("video");
    console.log(v);
    v.nativeElement.play();*/
    /*var offsets = document.getElementById('imageContainer').getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
    const lightBoxLeft = 1100-left;
    const lightBoxRight = 1300-left;
    const lightBoxTop = 600-top;
    const lightBoxBottom = 800-top;
    console.log("Estou aqui");
    console.log("X: " + x + "; Y: " + y);
    if(x > lightBoxLeft && x < lightBoxRight && y > lightBoxTop && y < lightBoxBottom){

      alert("You clicked the light");
    }*/

  }

  image = true;
  video = false;

  showImage(){
    return this.image;
  }

  showVideo(){
    return this.video;
  }

  current = 1;
  getImage(){
    return `assets/img/${this.current}.png`
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
