import {Component, OnInit} from '@angular/core';
import {TodoItemInterface} from '../interfaces/todo-item-interface';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: Array<TodoItemInterface> = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addItem(title) {
    this.todoList.push({title});
  }
}
