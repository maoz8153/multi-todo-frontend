import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import * as fromSubjectsState from '../../store/subjects';
import { ISubjectAndTaskCounter, ICreateSubjectInput } from 'src/app/core/model/subject.model';
import { UserLocalStorageService } from 'src/app/core/services/user-local-storage.service';
import { IUser } from 'src/app/core/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.less']
})
export class SubjectListComponent implements OnInit {

  private user: IUser;
  @Select(fromSubjectsState.SubjectsState.getSubjectsAndTaskCounter) subjectsAndCounters$: Observable<ISubjectAndTaskCounter[]>;

  constructor(private store: Store, private router: Router, private userLocalStorageService: UserLocalStorageService) { }

  ngOnInit() {
    this.user = this.userLocalStorageService.getUserFromLocalStorage();
    this.store.dispatch(new fromSubjectsState.GetSubjectsAndTaskCounter(this.user._id));
  }

  getSubjectsTasks(subjectId: string) {
    this.router.navigate(['subjects', subjectId, 'tasks']);
  }

  addNewSubject() {
    this.store.dispatch(new fromSubjectsState.CreateSubject(this.generateNewSubject()));
  }

  private generateNewSubject(): ICreateSubjectInput {
    const randomNum = Math.floor(Math.random() * 10);
    const newSubject = {
      title: `new subject ${randomNum}`,
      fkUserId: this.user._id
    };
    return newSubject;
  }

}
