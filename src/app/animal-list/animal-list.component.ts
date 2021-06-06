import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { AnimalInfoService } from '../animal-info.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  @Input() animalListPos;

  constructor(
	  private router : Router,
    public animalService : AnimalService,
	  private animalInfoService: AnimalInfoService
  ) { }

  ngOnInit() {
    //this calls the showWorld method
    this.animalService.showWorld();

    if(this.animalListPos === "right"){
      this.mirrorListRight();
    }
  }

  /**
   * This method remove the class "animalImg" from the animal given in the parameter name and adds the class "animalImgCatched"
   * This solely means that the animal image is not greyed out anymore 
   * @param name The name of the animal that was caught
   */
  animalCatched(name){
    var animal = document.getElementsByClassName(name)[0];
    animal.classList.remove("animalImg");
    animal.classList.add("animalImgCatched");
  }

  /**
   * This method is called when the user clicks the "Local" button
   * It changes the list of animals being shown (which is inside of animalService) so that it only contains the animals
   * from this world. This is done via a method inside animalService
   */
  showLocalAnimals(){
    this.animalService.showWorld();
  }

  /**
   * This method is called when the user clicks the "Global" button
   * It changes the list of animals being shown (which is inside of animalService) so that it contains all animals.
   * This is done via a method inside animalService
   */
  showAllAnimals(){
    this.animalService.showAll();
  }
  
  /**
   * This method is called when the user clicks on an animal
   * It "notifies" the animalInfoService what animal was clicked and changes to the animalInfo page
   * @param a The animal that was clicked
   */
  onClickAnimal(a){
	if(a.catched){
		this.animalInfoService.changeAnimal(a);
		this.router.navigate(['info']);
	}
  }


  mirrorListRight(){
    var container = document.getElementById('animals');
    var header = document.getElementById('header');
    var main = document.getElementById('main');
    var footer = document.getElementById('footer');
    var bar = document.getElementById('bar');

    container.classList.add("right");
    header.classList.add("right");
    main.classList.add("right");
    footer.classList.add("right");
    bar.classList.add("right");
  }
}
