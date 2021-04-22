import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css']
})
export class WorldsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  chooseWorld(){
	this.router.navigate(['/animation'])
  }

}
