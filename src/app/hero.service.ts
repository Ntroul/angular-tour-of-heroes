import { Injectable } from '@angular/core';
import { Hero, HeroCount, HeroGroups, HeroGroupCount, HeroType, HeroTypeCount} from './hero';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  constructor(
      private http: HttpClient,
    ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost/heroes.php?action=list')
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>('http://localhost/heroes.php?action=details&id='+id)
  }

  saveHero(hero:Hero): Observable<Hero> {
    return this.http.post<Hero>('http://localhost/heroes.php?action=save', {id:hero.id, name:hero.name, hero_type_id:hero.hero_type_id, hero:hero}, { headers:{ 'Content-Type':  'application/json'}})
  }

  getHeroCount(): Observable<HeroCount> {
    return this.http.get<HeroCount>('http://localhost/heroes.php?action=count')
  }
///////////////Hero Type
  getHeroTypes(): Observable<HeroType[]> {
    return this.http.get<HeroType[]>('http://localhost/hero_types.php?action=list')
  }

  getHeroType(id: number): Observable<HeroType> {
    return this.http.get<HeroType>('http://localhost/hero_types.php?action=details&hero_type_id='+id)
  }

  saveHeroType(herotype:HeroType): Observable<HeroType> {
    return this.http.post<HeroType>('http://localhost/hero_types.php?action=save', {hero_type_id:herotype.hero_type_id, hero_type_name:herotype.hero_type_name, herotype:herotype}, { headers:{ 'Content-Type':  'application/json'}})
  }
  getHeroTypeCount(): Observable<HeroTypeCount> {
    return this.http.get<HeroTypeCount>('http://localhost/hero_types.php?action=count') 
  }

  ///////////////// Hero Groups
  getHeroGroups(): Observable<HeroGroups[]> {
    return this.http.get<HeroGroups[]>('http://localhost/hero_groups.php?action=list')
  }

  getHeroGroup(id:Number): Observable<HeroGroups> {
    return this.http.get<HeroGroups>('http://localhost/hero_groups.php?action=details&hero_group_id='+id)
  }

  getHeroGroupsCount(): Observable<HeroGroupCount> {
    return this.http.get<HeroGroupCount>('http://localhost/hero_groups.php?action=count')
  }
  saveHeroGroup(herogroups:HeroGroups): Observable<HeroGroups> {
    return this.http.post<HeroGroups>('http://localhost/hero_groups.php?action=save', {hero_group_id:herogroups.hero_group_id, hero_group_name:herogroups.hero_group_name, herogroups:herogroups}, { headers:{ 'Content-Type':  'application/json'}})
  }

}







