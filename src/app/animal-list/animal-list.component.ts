import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { AppComponent } from '../app.component';
import { AnimalInfoService } from '../animal-info.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {


  constructor(
	private router : Router,
    private route : ActivatedRoute,
    public animalService : AnimalService,
	private animalInfoService: AnimalInfoService
  ) { }

  ngOnInit() {
    var animals = document.getElementsByClassName("animal")
    this.animalService.showWorld();
  }

  getColumn(a){
    var i = 0;
    for(i = 0; i < this.animalService.getAnimals().length; i++){
      if(a == this.animalService.getAnimals()[i]){
        if(i % 2 == 0){
          console.log(`${a} : column 1`)
          return 1;
        }else{
          console.log(`${a} : column 1`)
          return 2;
        }
      }
    }
  }

  getRow(a){
    var i = 0;
    for(i = 0; i < this.animalService.getAnimals().length; i++){
      if(a == this.animalService.getAnimals()[i]){
        console.log(`${a} : row ${i%2+1}`)
        return i % 2 == 0 ? i / 2 + 1 : (i-1)/2+1
      }
    }
  }
  getStyle(a){
    let aux = {
      gridColumn: this.getColumn(a),
      gridRow: this.getRow(a)
    }
    return aux;
  }

  getImageStyle(a){
    if(a.catched){
      return {}
    }
  }

  animalCatched(name){
    var animal = document.getElementsByClassName(name)[0];
    animal.classList.remove("animalImg");
    animal.classList.add("animalImgCatched");
  }

  showLocalAnimals(){
    this.animalService.showWorld();
  }

  showAllAnimals(){
    this.animalService.showAll();
  }
  
  onClickAnimal(a){
	if(a.catched){
		this.animalInfoService.changeAnimal(a);
		this.router.navigate(['info']);
	}
  }
}
