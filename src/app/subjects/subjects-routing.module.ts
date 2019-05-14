import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { UserSelectedGuard } from '../core/services/user-selected.guard';
import { TaksListComponent } from './tasks/taks-list/taks-list.component';

const routes: Routes = [
  {
    path: '', component: SubjectListComponent, canActivate: [UserSelectedGuard], children: [
      {
        path: ':id/tasks',
        component: TaksListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
