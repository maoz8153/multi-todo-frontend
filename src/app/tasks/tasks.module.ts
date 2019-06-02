import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskViewComponent } from './task-view/task-view.component';

@NgModule({
    declarations: [TaskListComponent, TaskViewComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule
    ]
})
export class TasksModule { }
