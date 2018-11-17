import {Component, Input, OnInit} from '@angular/core';
import {TodoItemInterface} from '../interfaces/todo-item';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() item: TodoItemInterface;

  constructor() {
  }

  ngOnInit() {
  }

}
