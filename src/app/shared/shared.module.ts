import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTabComponent } from './user-tab/user-tab.component';
import { CapitalizePipe } from './capitalize.pipe';
import {
  MatBadgeModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatGridListModule, MatIconModule,
  MatListModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [UserTabComponent, CapitalizePipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatTableModule
  ],
  exports: [UserTabComponent,
    CapitalizePipe,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule
  ]
})
export class SharedModule { }
