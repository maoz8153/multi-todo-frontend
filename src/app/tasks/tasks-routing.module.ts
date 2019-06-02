import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaksListComponent } from '../tasks/taks-list/taks-list.component';

const routes: Routes = [
    {
        path: '', component: TaksListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
