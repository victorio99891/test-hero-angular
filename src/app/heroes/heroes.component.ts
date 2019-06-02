import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero): void {
    if (this.selectedHero === hero) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }
}
