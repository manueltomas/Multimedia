import { Component, Input, OnInit } from '@angular/core';
import { WorldService } from 'src/app/world.service';
import { PopupService } from '../popup/popup.service';

@Component({
  selector: 'app-settings-model-popup',
  templateUrl: './settings-model-popup.component.html',
  styleUrls: ['./settings-model-popup.component.css']
})
export class SettingsModelPopupComponent implements OnInit {

  @Input() id;

  constructor( private popupServices: PopupService,
               private worldService: WorldService) { }

  ngOnInit(): void {
  }

  closePopup(){
    this.popupServices.close(this.id);
  }

  toogleAnimalListPosition(){
    var element = <HTMLInputElement> document.getElementsByClassName("toogleAnimalListPosition")[0];

    if(element.checked){
      this.worldService.animalListPosition = "right";
    } else{
      this.worldService.animalListPosition = "left";
    }
  }
}
