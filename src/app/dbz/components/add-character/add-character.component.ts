import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //Define una salida del componente que el
  //componente padre puede suscribirse para escuchar.
 //en nuestro caso emite un objeto de tipo character
  @Output()
  public  onNewCharacter: EventEmitter<Character>=new EventEmitter();

  //objeto con valor por defecto
  public character: Character={
    name: '',
    power: 0
  };


  //este método es llamado desde el ngSubmit del form
  emitCharacter(): void{
    //para debuggear
    // debugger;
    console.log("prueba de emit" +this.character.power);

    //verificacion para que no se envíen personajes sin nombre
    if(this.character.name.length===0) return;

    //en caso contrario emitimos usando el metodo de arriba (el output) el caracter
    //los tres puntos es para asegurarnos que se crea un nuevo objeto
    this.onNewCharacter.emit({...this.character});


    this.character.name='';
    this.character.power=0;

  }
}
