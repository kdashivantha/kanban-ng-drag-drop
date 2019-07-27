import { Task } from './../../models/task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  host:{
    class:'task'
  }
})
export class TaskComponent implements OnInit {

  @Input()
  taskModel:Task;

  constructor() { }

  ngOnInit() {
  }

  public get Id():string{
    return this.taskModel.Id.substring(0,6);
  }
}
