import { Component } from '@angular/core';


@Component({
  //nombre que se va a usar en el html
  selector: 'app-counter',

  //el template es el html , puede ser interno (declarado aquí)  o externo
  //para inline lo recomendable es un máximo de cuatro líneas
  template: `
    <h3>Counter: {{counter}}</h3>

    <!--Entre parentesis aparecen muchos eventos del boton -->
    <!--Con nuestro evento click llamamos al método, que puede no recibir nada, en este caso recibe el valor del counter-->
    <button (click)="increasBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increasBy(-1)">-1</button>
`
})
export class CounterComponent{

  public counter: number=10;

  //metodo para aumentar el contador arriiba declarado
  increasBy(value: number):void{
    this.counter+=value;
  }

  //método para resetear el valor
  reset():void{
    this.counter=10;
  }

}
