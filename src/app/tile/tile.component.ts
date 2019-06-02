import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../todolist/task.model';
import { TodolistService } from './../todolist/todolist.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input()
  task: Task;

  constructor(private taskService: TodolistService) {}

  ngOnInit() {}

  print(task: Task) {
    console.log(task);
  }

  doTask(task: Task) {
    task.done = true;
    this.taskService.doTask(task);
  }

  undoTask(task: Task) {
    task.done = false;
    this.taskService.undoTask(task);
  }

  deleteTask(task: Task) {
    console.log(task);
  }
}
