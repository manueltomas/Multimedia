import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';
import { AnimalInfoService } from '../animal-info.service';
import {Location} from '@angular/common';
import { Animal } from '../Animal';
import { HttpClient } from '@angular/common/http';
import { ANIMALS } from '../mock-animals';
import { WorldService } from '../world.service';

declare var require:any

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.css']
})
export class AnimalInfoComponent implements OnInit {

  currAnimal : Animal;
  data;
  language = "Portuguese";
  subtitles;
  fileContent;
  
  constructor(
    private worldService : WorldService,
  private router : Router,
	private _location: Location,
	private animalInfoService: AnimalInfoService,
  private http: HttpClient
  ) { }

  ngOnInit(): void {
    if(this.animalInfoService.animal == undefined){
      this.router.navigate(['']);
    }
	  //this.currAnimal = this.animalInfoService.animal;
    this.currAnimal = ANIMALS[this.animalInfoService.animal.id - 1];
    //var fs = require('fs');
    var parser = require('subtitles-parser');
    //var srt = fs.readFile(`assets/subtitles/${name}-${this.language}.srt`, { encoding: 'utf-8' });
    //this.data = parser.fromSrt("1\n00:00:00,000 --> 00:00:02,000\nEncontrou um gato!\n");

    var source = this;
    this.http.get(`assets/subtitles/${this.currAnimal.name}-${this.language}.srt`, {responseType: 'text'})
        .subscribe(data => {
          source.data = parser.fromSrt(data);
        });
  }
  
  getCurrAnimalName(){
    //this.currAnimal = this.animalInfoService.animal;
	  return this.currAnimal.name;
  }
  
  closeInfoPage(){
	  this._location.back();
  }

  getVideoUrl(){
    return `assets/video/${this.currAnimal.name}.mp4`
  }

  timeUpdate(time){
    console.log(time.target.currentTime)
    if(this.language === "Off"){
      this.subtitles = "";
      return;
    }
    for(var i = 0; i < this.data.length; i++){
      console.log(this.stringToSeconds(this.data[i].startTime) < time.target.currentTime && this.stringToSeconds(this.data[i].endTime) > time.target.currentTime)
      if(this.stringToSeconds(this.data[i].startTime) < time.target.currentTime && this.stringToSeconds(this.data[i].endTime) > time.target.currentTime){
        this.subtitles = this.data[i].text;
        console.log(this.subtitles)
        break;
      }
    }
  }
  stringToSeconds(string : string){
    var auxString = string.split(":");
    var result = +auxString[0]*3600;
    result += +auxString[1]*60;
    result += +auxString[2].split(",")[0] + +auxString[2].split(",")[1]/1000
    console.log("string :" + string + ": " + result + " secs")
    return result;
  }

  changedLang(){
    if(this.language !== "Off"){
      var parser = require('subtitles-parser');
      var source = this;
      this.http.get(`assets/subtitles/${this.currAnimal.name}-${this.language}.srt`, {responseType: 'text'})
          .subscribe(data => {
            source.data = parser.fromSrt(data);
          });
    }
  }
}
