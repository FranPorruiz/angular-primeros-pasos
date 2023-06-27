import { NgModule } from "@angular/core";
import { CounterComponent } from './counter/counter.component';

//este es un modulo agrupador, que a su vez contiene otros componenentes
@NgModule({
  declarations:[
    CounterComponent
  ],

  exports:[
    CounterComponent
  ]

})
export class CounterModule{


}
