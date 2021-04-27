import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationComponent } from './animation/animation.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { WorldsComponent } from './worlds/worlds.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    AnimalListComponent,
	WorldsComponent
  ],
  imports: [
  	MatTooltipModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
