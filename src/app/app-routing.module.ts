import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroTypesComponent } from './hero-types/hero-types.component';
import { HeroGroupsComponent } from './hero-groups/hero-groups.component';
import { TypeDetailComponent } from './type-detail/type-detail.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: 'heroes/create', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },

  { path: 'types/:id',component:TypeDetailComponent},
  { path: 'types/create',component:TypeDetailComponent},
  { path: 'types', component: HeroTypesComponent },

  { path: 'group/:id',component:GroupDetailComponent},
  { path: 'group/create',component:GroupDetailComponent},
  { path: 'groups', component: HeroGroupsComponent },
  
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  /* { path: '', component: HeroesComponent }, 
  { path: '**', component: HeroesComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }