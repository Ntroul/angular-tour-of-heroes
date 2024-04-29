import { Component, OnInit } from '@angular/core';
import { HeroGroups } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-groups',
  templateUrl: './hero-groups.component.html',
  styleUrls: ['./hero-groups.component.css']
})
export class HeroGroupsComponent implements OnInit {

  herogroups: HeroGroups[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.getHeroGroups();
  }

    getHeroGroups() {
      this.heroService.getHeroGroups().subscribe(herogroups =>{
        console.log(herogroups);
      this.herogroups = herogroups
      }
    );
  }
  create() {
    this.router.navigate(['/groupdetails']);
    }
}
