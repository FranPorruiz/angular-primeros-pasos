import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[]=[
    'Spiderman', 'Ironman', 'Thor'
  ]

  //esta variable es para poder recoger cual es el último heroe borrado
  //puede ser undefined
  public deletedHero?: string;


  removeLastName():void{
    //método que borra el último elemento del array
    //también nos devuelve a la variable deletedHeroe
    this.deletedHero=this.heroNames.pop();

  }

}
