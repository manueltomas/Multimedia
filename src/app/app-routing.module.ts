import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldsComponent } from './worlds/worlds.component'
import { AnimationComponent } from './animation/animation.component'
import { AnimalInfoComponent} from './animal-info/animal-info.component'

const routes: Routes = [
	{ path: '', component: WorldsComponent },
	{ path: 'animation', component: AnimationComponent },
	{ path: 'info', component: AnimalInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
