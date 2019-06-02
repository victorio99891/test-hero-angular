import { Component, OnInit } from '@angular/core';
import { Task } from '../todolist/task.model';
import { M_TODO_TASKS } from './../todolist/mocked.task';
import { TodolistService } from '../todolist/todolist.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  taskList: Task[];

  constructor(private taskService: TodolistService) {}

  ngOnInit() {
    this.taskList = this.taskService.todoList;
  }
}
