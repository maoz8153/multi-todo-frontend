import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaksListComponent } from './taks-list/taks-list.component';
import { SharedModule } from '../shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
    declarations: [TaksListComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule
    ]
})
export class TasksModule { }
