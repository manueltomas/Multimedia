import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationComponent } from './animation/animation.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { WorldsComponent } from './worlds/worlds.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    AnimalListComponent,
	WorldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
