import { Component, OnInit } from '@angular/core';
import { HeroType } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-types',
  templateUrl: './hero-types.component.html',
  styleUrl: './hero-types.component.css'
})
export class HeroTypesComponent implements OnInit {

  herotypes: HeroType[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router           
    ) { }

  ngOnInit(): void {
    this.getHeroTypes();
  }

    getHeroTypes() {
      this.heroService.getHeroTypes().subscribe(herotypes =>{
        console.log(herotypes);
        this.herotypes = herotypes
      }
    );
  }
}
