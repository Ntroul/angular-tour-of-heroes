import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero, HeroCount, HeroGroupCount, HeroTypeCount } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  hero: Hero[] = [];
  heroCount: HeroCount | undefined;
  HeroTypeCount: HeroTypeCount | undefined;
  HeroGroupCount: HeroGroupCount | undefined;
  featuredHeroes: Hero[] = [];

  filteredHeroes: Hero[] = [];
  searchQuery: string = '';
  
  constructor(
  private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getHeroCount();
    this.getHeroTypeCount();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.featuredHeroes = heroes.filter(hero => hero.featured);
      });
  }

  getHeroCount(): void {
    this.heroService.getHeroCount()
      .subscribe(heroCount => {
        this.heroCount = heroCount;
      });
  }

  getHeroTypeCount(): void {
    this.heroService.getHeroTypeCount()
      .subscribe(HeroTypeCount => {
        this.HeroTypeCount = HeroTypeCount;
      });
  }
  applySearchFilter(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredHeroes = this.heroes.slice(); 
    } else {
      this.filteredHeroes = this.heroes.filter(hero =>
        hero.name && hero.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
