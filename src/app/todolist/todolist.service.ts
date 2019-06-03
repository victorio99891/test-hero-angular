import { Injectable } from '@angular/core';
import { M_TODO_TASKS, M_DONE_TASKS } from './mocked.task';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  todoList: Task[] = M_TODO_TASKS;
  doneList: Task[] = M_DONE_TASKS;

  constructor() {}

  addNewTask(newTask: Task) {
    const tmpList: Task[] = this.todoList.concat(this.doneList);
    if (tmpList.length > 0) {
      tmpList.sort((a, b) => (a.id > b.id ? 1 : -1));
      let lastIndex = tmpList[tmpList.length - 1].id;
      lastIndex++;
      newTask.id = lastIndex;
    } else {
      newTask.id = 1;
    }
    this.todoList.push(newTask);
  }

  doTask(task: Task) {
    this.deleteTaskFromArray(task);
    this.doneList.push(task);
  }

  undoTask(task: Task) {
    this.deleteTaskFromArray(task);
    this.todoList.push(task);
  }

  deleteTaskFromArray(task: Task) {
    let index = this.todoList.findIndex(item => item.id === task.id);
    if (index > -1) {
      this.todoList.splice(index, 1);
    }
    index = this.doneList.findIndex(
      item => item.id === task.id && item.text === task.text
    );
    if (index > -1) {
      this.doneList.splice(index, 1);
    }
  }
}
