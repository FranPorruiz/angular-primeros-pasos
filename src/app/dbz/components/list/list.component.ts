import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //le estamos diciendo que recibe una propierty llamada Charcter List  con un valor por defecto
  @Input()
  public characterList: Character[]=[{
    name: 'Trunk',
    power: 10
  }]
    //onDeleteID=index value: number, lo emtie con output
    //modificado, lo pasamos a striing para que pueda coger el id generado
  @Output()
  public  onDelete: EventEmitter<string>=new EventEmitter();

  //le decimos a esta funcion que emita el index que recibe, pero no devuelve nada
  //modificado, en vez de index le pasamos el id generado por el uuid
  onDeleteCharacter(id?: string):void{

    //como el id es opcional (puede ser undefined hay introducimos un if para que nos saque de la función)
    if(!id) return;


    //emitir el id del personaje
    this.onDelete.emit(id);  }

}
