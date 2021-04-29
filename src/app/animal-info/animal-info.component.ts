import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';
import { AnimalInfoService } from '../animal-info.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.css']
})
export class AnimalInfoComponent implements OnInit {

  currAnimal;
  
  constructor(
	private _location: Location,
	private router : Router,
	private route : ActivatedRoute,
	private animalService : AnimalService,
	private animalInfoService: AnimalInfoService) { }

  ngOnInit(): void {
	this.currAnimal = this.animalInfoService.animal;
  }
  
  getCurrAnimalName(){
	  this.currAnimal = this.animalInfoService.animal;
	  return this.currAnimal.name;
  }
  
  closeInfoPage(){
	this._location.back();
  }

}
