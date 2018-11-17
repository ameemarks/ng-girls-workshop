import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';


@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
