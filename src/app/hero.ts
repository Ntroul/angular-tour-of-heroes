export interface Hero {
  id?: number;
  name?: string;
  hero_type_id? :number; 
  hero_group_id? :number;
  featured?:boolean|null;
  //
  hero_type_name? :string;
  hero_group_name?: string;
  //
  herotypes? :string;
}
export interface HeroType { //hero-types
  hero_type_id?: number;
  hero_type_name?: string;
}
export interface HeroGroups { //hero-groups
  hero_group_id?:number;
  hero_group_name?:string;
}
export interface HeroCount{ //dashboard heroes count
  heroCount: number;
}
export interface HeroTypeCount{  //dashboard hero type count
  HeroTypeCount: number;
}
export interface HeroGroupCount{ //dashboard hero group count
  HeroGroupCount: number;
}



