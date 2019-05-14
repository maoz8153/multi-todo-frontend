import { Action, Selector, State, StateContext } from '@ngxs/store';
import * as fromAction from '../actions';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ISubjectAndTaskCounter, ICreateSubjectInput, ISubject, SubjectAndTaskCounter } from 'src/app/core/model/subject.model';
import { SubjectService } from 'src/app/subjects/subject.service';

export class SubjectListStateModel {
  data: Array<ISubjectAndTaskCounter>;
  loaded: boolean;
  loading: boolean;
}

@State<SubjectListStateModel>({
  name: 'subjectsState',
  defaults: {
    data: [],
    loaded: false,
    loading: false,
  }
})


export class SubjectsState {
  constructor(private subjectSrv: SubjectService) {
  }

  @Selector()
  static getSubjectsAndTaskCounter(state: SubjectListStateModel): Array<ISubjectAndTaskCounter> {
    return state.data;
  }


  @Action(fromAction.GetSubjectsAndTaskCounter)
  // tslint:disable-next-line:max-line-length
  GetSubjectsAndTaskCounter({ dispatch, patchState }: StateContext<SubjectListStateModel>, action: fromAction.GetSubjectsAndTaskCounter) {
    patchState({ loading: true });
    const userId = action.payload;
    return this.subjectSrv.getSubjectsAndTaskCounter(userId)
      .pipe(
        map((data) => {
          dispatch(new fromAction.GetSubjectsAndTaskCounterSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.GetSubjectsAndTaskCounterFail(error))))
      );
  }

  @Action(fromAction.GetSubjectsAndTaskCounterSuccess)
  // tslint:disable-next-line:max-line-length
  GetSubjectsAndTaskCounterSuccess({ patchState }: StateContext<SubjectListStateModel>, action: fromAction.GetSubjectsAndTaskCounterSuccess) {
    const data = action.payload as ISubjectAndTaskCounter[];
    patchState(
      {
        data,
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.GetSubjectsAndTaskCounterFail)
  GetSubjectsAndTaskCounterFail({ patchState }: StateContext<SubjectListStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }


  @Action(fromAction.CreateSubject)
  CreateSubject({ dispatch, patchState }: StateContext<SubjectListStateModel>, action: fromAction.CreateSubject) {
    patchState({ loading: true });
    const newSubject = action.payload;
    return this.subjectSrv.createSubject(newSubject)
      .pipe(
        map((data) => {
          dispatch(new fromAction.CreateSubjectSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.CreateSubjectFail(error))))
      );
  }

  @Action(fromAction.CreateSubjectSuccess)
  // tslint:disable-next-line:max-line-length
  CreateSubjectSuccess({ patchState, getState }: StateContext<SubjectListStateModel>, action: fromAction.CreateSubjectSuccess) {
    const subject = action.payload as ISubjectAndTaskCounter;
    subject.taskCounter = 0;
    const state = getState();
    patchState(
      {
        data: [...state.data, subject],
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.CreateSubjectFail)
  CreateSubjectFail({ patchState }: StateContext<SubjectListStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }

  @Action(fromAction.UpdateTaskCounter)
  UpdateTaskCounter({ patchState, getState }: StateContext<SubjectListStateModel>, action: fromAction.UpdateTaskCounter) {
    const data = getState().data;
    const subject = data.find((item) => {
      return item._id === action.payload.subjectId;
    });
    const subIndex = getState().data.indexOf(subject);
    action.payload.increment ? data[subIndex].taskCounter++ : data[subIndex].taskCounter--;
    patchState(
      {
        loading: false,
        loaded: false,
        data: [...data]
      }
    );
  }

}

