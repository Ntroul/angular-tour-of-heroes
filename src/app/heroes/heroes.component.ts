import { Component, OnInit } from '@angular/core';
import { Hero, HeroType } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes: Hero[] = [];

  
  constructor(
    private heroService: HeroService, 
    private messageService: MessageService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes
      }
    );
  }
}