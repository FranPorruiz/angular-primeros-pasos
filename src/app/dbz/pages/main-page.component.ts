//iniciar con snoppet a-component
import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //con esto inyectamos nuestro servicio en el main page
  constructor( private dbzservice:DbzService){}
    //este get nos va a devolver un arrais con los caracteres tirando del servicio que
    //declaramos en el constructor
    get characters(): Character[]{
      //recogenos todos los caracteres
      return [...this.dbzservice.characters];
    }

    //metodo para borrar
    onDeleteCharacter(id: string):void{
      this.dbzservice.deleteCharacterById(id);
    }

    //metodo que llama a nuestro servicio que recoge un caracteter desde la mainpage
    addCharacter(character: Character): void{
      this.dbzservice.addCharacter(character);
    }
  }


