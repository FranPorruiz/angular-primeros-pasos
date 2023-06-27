import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string='ironman';
  public age: number=0;

  //geter, es un metodo de clase que se usa como propiedad
  get capitalizeName(): string{
    return this.name.toUpperCase();

  }

  //metodo
  getHeroeDescription():string{
    return `${this.name} - ${this.age}`;
  }


  changeHeroe():void{
    this.name='Thor';
  }

  changeAge():void{
    this.age=1000;
  }

  restaurar():void{
    this.name='ironman';
    this.age=0;
  }

}
