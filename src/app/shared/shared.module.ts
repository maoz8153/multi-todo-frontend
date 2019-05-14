import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTabComponent } from './user-tab/user-tab.component';
import { CapitalizePipe } from './capitalize.pipe';
import {
  MatBadgeModule,
  MatButtonModule, MatCardModule, MatCheckboxModule,
  MatGridListModule, MatIconModule,
  MatListModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [UserTabComponent, CapitalizePipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ],
  exports: [UserTabComponent,
    CapitalizePipe,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule
  ]
})
export class SharedModule { }
