import { Component } from '@angular/core';
import { Hero, HeroGroups, HeroType } from '../hero';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  hero: Hero | undefined;
  hero_types: HeroType[] = [];
  hero_group:HeroGroups[] = [];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router,
    private messageService: MessageService
  ) {}

  
  
  

ngOnInit(): void {
  this.heroService.getHeroTypes().subscribe( heroTypes =>
    {
      this.hero_types = heroTypes;
    })
    this.heroService.getHeroGroups().subscribe(herogroup =>
      {
        this.hero_group = herogroup;
      })
  this.getHero();
}

getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  if (id){
    console.log(id)
    this.heroService.getHero(id)
        .subscribe(hero => {
          console.log(hero)
          this.hero = hero
        });
  }else{
    this.hero = {id:undefined, name:''};
  }
}
goBack(): void {
  this.router.navigate(['/heroes']);
}
save():void{
  console.log('Saved');
  if (this.hero === undefined){
    return;
  }
 else
    this.heroService.saveHero(this.hero).subscribe(() => {
        this.router.navigate(['/heroes']);
      }
    );
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Hero saved successfully!', }); 
  }
}

