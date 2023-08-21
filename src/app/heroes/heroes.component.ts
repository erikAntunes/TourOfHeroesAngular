import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  hero: Hero = {
    id: 777,
    name: 'Iron Man'
  };

 // constructor(){}

}
