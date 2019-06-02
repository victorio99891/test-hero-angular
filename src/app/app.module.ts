import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { DoneComponent } from './done/done.component';
import { TileComponent } from './tile/tile.component';
import { TodolistService } from './todolist/todolist.service';

@NgModule({
  declarations: [AppComponent, HeroesComponent, TodolistComponent, TodoComponent, DoneComponent, TileComponent],
  imports: [BrowserModule, FormsModule],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule {}
