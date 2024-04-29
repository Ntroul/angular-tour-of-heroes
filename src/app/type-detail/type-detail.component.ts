import { Component, OnInit } from '@angular/core';
import { HeroType } from '../hero';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.css']
})
export class TypeDetailComponent implements OnInit {

  hero_type: HeroType = { hero_type_id: undefined, hero_type_name: '' };
  heroTypes: HeroType[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroTypes();
    this.getHeroType(); 
  }

  getHeroTypes(): void {
      this.heroService.getHeroTypes().subscribe(heroTypes => {
        this.heroTypes = heroTypes;
      }
    );
  }

  getHeroType(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
      if (id) {
       
        this.heroService.getHeroType(id).subscribe(heroType => {
          this.hero_type = heroType;
        }
      );
    }else{
      this.hero_type = {hero_type_id:undefined, hero_type_name:''};
    }
  }

  goBack(): void {
    this.router.navigate(['/types']);
  }

  save(): void {
        this.heroService.saveHeroType(this.hero_type).subscribe(() => {
          this.router.navigate(['/types']);
        }
      );
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Hero type saved successfully!',  });
  }
}
