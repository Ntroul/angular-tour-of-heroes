import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroGroups } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrl: './group-detail.component.css'
})
export class GroupDetailComponent {

  hero_group: HeroGroups = { hero_group_id: undefined, hero_group_name: '' };

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private heroService: HeroService,
    private messageService: MessageService
  ){ }


  ngOnInit(): void{
    this.getHeroGroup();
  }
  
  getHeroGroup() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(id)
      if (id) {
        this.heroService.getHeroGroup(id).subscribe(heroGroup => {
          console.log(heroGroup)
          this.hero_group = heroGroup;
        }
      );
    }
  }

  goBack() {
    this.router.navigate(['/groups']);
  }
  

  save(): void {
    this.heroService.saveHeroGroup(this.hero_group).subscribe(() => {
        this.router.navigate(['/groups']);
      }
    );
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Group saved successfully!', }); 
  }
}