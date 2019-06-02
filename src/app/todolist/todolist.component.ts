import { Component, OnInit } from '@angular/core';
import { TodolistService } from './todolist.service';
import { Task } from './task.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskText: string;

  constructor(private taskService: TodolistService) {}

  ngOnInit() {}

  addNewTask() {
    let newTask: Task = {
      id: undefined,
      text: this.taskText,
      done: false
    };
    this.taskService.addNewTask(newTask);
    this.taskText = '';
  }
}
