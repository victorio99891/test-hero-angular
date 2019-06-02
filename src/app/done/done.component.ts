import { Component, OnInit } from '@angular/core';
import { Task } from '../todolist/task.model';
import { M_DONE_TASKS } from '../todolist/mocked.task';
import { TodolistService } from '../todolist/todolist.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  taskList: Task[] = M_DONE_TASKS;

  constructor(private taskService: TodolistService) {}

  ngOnInit() {}
}
