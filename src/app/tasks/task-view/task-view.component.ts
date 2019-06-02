import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/core/model/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.less']
})
export class TaskViewComponent implements OnInit {

  @Input() task: ITask;
  @Output() deleteTask = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit() {
  }

  deleteTaskAction(task: ITask) {
    this.deleteTask.emit(task);
  }

}
