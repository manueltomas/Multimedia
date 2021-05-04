import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationComponent } from './animation/animation.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { WorldsComponent } from './worlds/worlds.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalInfoComponent } from './animal-info/animal-info.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    AnimalListComponent,
	WorldsComponent,
	AnimalInfoComponent,
 MainMenuComponent
  ],
  imports: [
  	MatTooltipModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
