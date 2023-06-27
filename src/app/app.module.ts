import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';


//cualquier componente tiene que ser declarado aquí para ser usado
@NgModule({
  declarations: [
    AppComponent,
  ],

  //Aquí importamos los módulos
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
