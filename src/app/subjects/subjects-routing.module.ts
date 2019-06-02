import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { UserSelectedGuard } from '../core/services/user-selected.guard';

const routes: Routes = [
  {
    path: '', component: SubjectListComponent, canActivate: [UserSelectedGuard],
    children: [
      {
        path: ':id/tasks',
        loadChildren: 'src/app/tasks/tasks.module#TasksModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
