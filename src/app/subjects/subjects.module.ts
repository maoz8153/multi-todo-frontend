import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SubjectListComponent],
  imports: [
    CommonModule,
    SharedModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
