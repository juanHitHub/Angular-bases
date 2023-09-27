import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
   public name:string='ironman';
   public age:number=45;

   get capitalizeName():string{
    return 'Hola mundo'.toUpperCase();
   }

   getHeroDescription():string{
    return `${this.name} - ${this.age}`
   }

   changeHero():void{
       this.name='Spiderman'
   }

   changeAge(){
       this.age=43;
   }

   resetForm():void{
    //this.name='ironman';
    this.age = 45;

    document.querySelectorAll('h1')!.forEach(elemnet => {
      elemnet.innerHTML='<h1>Desde Angular</h1>';
    })
   }
}
