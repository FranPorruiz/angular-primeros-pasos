import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
//el import uuid (se instala en la terminal con npm i uuid y luego npm i --save-dev @types/uuid) sirve para crear ids
import { v4 as uuid} from 'uuid';

//El decorador Injectable le dice a angular que lo use como un servicio
//EL provideIn nos proporciona un singleton ( patrón de diseño que permite restringir la creación de objetos pertenecientes a una clase o el valor de un tipo a un único objeto.)
// en todo el programa
@Injectable({
  providedIn: 'root'})
export class DbzService {
  //aqui incluimos la informacion que queremos manejar
    public characters:Character[]=[
      {
        id: uuid(), //para generar id
        name: 'Krilin',
        power:1000
      },
      {
        id: uuid(), //para generar id
        name: 'Goku',
        power: 10000
      },
      {
        id: uuid(), //para generar id
        name: 'Vegeta',
        power: 7500
      }
    ];

    addCharacter(character: Character): void{
      const newCharacter: Character={
        id: uuid(),
        //los tres puntos  (operador spread ) coge todos los atributos del objeto caracter y así no hay que declararlos
       //tambien se puede escribir asi name, power
        ...character
      }

      //le pasamos el caracter que recibimos al arrais (push para que sea al final del arrais)
      this.characters.push(newCharacter);
    }

    //este elemento recibe un elemeneto (index o character)
    // onDeleteCharacter(index: number){
    //   this.characters.splice(index, 1 );
    // }

    //filtro por id, nos devuelve un array que no tiene  esa id
    deleteCharacterById(id: string){
      //devuelve un arrays en el que filtra todos los caracteres cuya id no sea igual a la id que le hemos pasado
      this.characters=this.characters.filter(character =>character.id!==id);
    }

  }

