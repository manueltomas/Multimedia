import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldsComponent } from './worlds/worlds.component'
import { AnimationComponent } from './animation/animation.component'

const routes: Routes = [
	{ path: '', component: WorldsComponent },
	{ path: 'animation/:world', component: AnimationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
