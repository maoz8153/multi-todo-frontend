import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import * as fromTasksState from '../../store/tasks';
import { ITask, ICreateTaskInput } from 'src/app/core/model/task.model';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatListOption } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit, OnDestroy {

  private paramSubscribe: any;
  private subjectId: string;
  private selectedTasks: Array<string> = [];

  @Select(fromTasksState.TasksState.getTaskListBySubject) taskList$: Observable<ITask[]>;


  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscribe = this.route.params.subscribe(params => {
      this.subjectId = params.id;
      this.store.dispatch(new fromTasksState.GetTaskListBySubject(this.subjectId));
    });
  }

  addNewTask() {
    this.store.dispatch(new fromTasksState.CreateTask(this.generateNewTask()));
  }

  onDeleteTask(task: ITask) {
    this.store.dispatch(new fromTasksState.DeleteTask(task));
  }

  removedSelectedTasks() {
    console.log(this.selectedTasks);
  }

  onSelection(event, value) {
    const currentSelected: ITask = event.option.value;
    currentSelected.complited = !currentSelected.complited;
    this.store.dispatch(new fromTasksState.UpdateTask(currentSelected));
  }

  private generateNewTask(): ICreateTaskInput {
    const randomNum = Math.floor(Math.random() * 10);
    const newTasks = {
      title: `new task ${randomNum}`,
      complited: false,
      fkSubjectId: this.subjectId
    };
    return newTasks;
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

}
