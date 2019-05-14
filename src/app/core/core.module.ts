import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLocalStorageService } from './services/user-local-storage.service';
import { UserSelectedGuard } from './services/user-selected.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UserLocalStorageService, UserSelectedGuard]
})
export class CoreModule { }
