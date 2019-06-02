import { Action, Selector, State, StateContext } from '@ngxs/store';
import * as fromAction from '../actions';
import * as fromSubjectAction from '../../subjects/actions';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ITask } from 'src/app/core/model/task.model';
import { TaskService } from 'src/app/tasks/task.service';

export class TaskListStateModel {
  data: Array<ITask>;
  loaded: boolean;
  loading: boolean;
}

@State<TaskListStateModel>({
  name: 'tasksState',
  defaults: {
    data: [],
    loaded: false,
    loading: false,
  }
})


export class TasksState {
  constructor(private taskSrv: TaskService) {
  }

  @Selector()
  static getTaskListBySubject(state: TaskListStateModel): Array<ITask> {
    return state.data;
  }

  @Action(fromAction.GetTaskListBySubject)
  getTaskListBySubject({ dispatch, patchState }: StateContext<TaskListStateModel>, action: fromAction.GetTaskListBySubject) {
    patchState({ loading: true });
    const subjectId = action.payload;
    return this.taskSrv.getTaskListBySubject(subjectId)
      .pipe(
        map((data) => {
          dispatch(new fromAction.GetTaskListBySubjectSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.GetTaskListBySubjectFail(error))))
      );
  }

  @Action(fromAction.GetTaskListBySubjectSuccess)
  // tslint:disable-next-line:max-line-length
  getTaskListBySubjectSuccess({ patchState }: StateContext<TaskListStateModel>, action: fromAction.GetTaskListBySubjectSuccess) {
    const data = action.payload as ITask[];
    patchState(
      {
        data,
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.GetTaskListBySubjectFail)
  getTaskListBySubjectFail({ patchState }: StateContext<TaskListStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }


  @Action(fromAction.CreateTask)
  createTask({ dispatch, patchState }: StateContext<TaskListStateModel>, action: fromAction.CreateTask) {
    patchState({ loading: true });
    const newTask = action.payload;
    return this.taskSrv.createTask(newTask)
      .pipe(
        map((data) => {
          dispatch(new fromAction.CreateTaskSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.CreateTaskFail(error))))
      );
  }

  @Action(fromAction.CreateTaskSuccess)
  // tslint:disable-next-line:max-line-length
  CreateTaskSuccess({ patchState, getState, dispatch }: StateContext<TaskListStateModel>, action: fromAction.CreateTaskSuccess) {
    const task = action.payload as ITask;
    const state = getState();
    patchState(
      {
        data: [...state.data, task],
        loading: false,
        loaded: true
      }
    );
    dispatch(new fromSubjectAction.UpdateTaskCounter({ subjectId: task.fkSubjectId, increment: true }));
  }

  @Action(fromAction.CreateTaskFail)
  CreateTaskFail({ patchState }: StateContext<TaskListStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }

  @Action(fromAction.UpdateTask)
  updateTask({ dispatch, patchState }: StateContext<TaskListStateModel>, action: fromAction.UpdateTask) {
    patchState({ loading: true });
    const task = action.payload;
    return this.taskSrv.updateTask(task)
      .pipe(
        map((a) => {
          dispatch(new fromAction.UpdateTaskSuccess(task));
        }),
        catchError(error => of(dispatch(new fromAction.UpdateTaskFail(error))))
      );
  }

  @Action(fromAction.UpdateTaskSuccess)
  // tslint:disable-next-line:max-line-length
  UpdateTaskSuccess({ patchState, getState }: StateContext<TaskListStateModel>, action: fromAction.UpdateTaskSuccess) {
    const task = action.payload as ITask;
    const data = getState().data;
    const foundIndex = data.findIndex(x => x._id === task._id);
    data[foundIndex] = task;
    patchState(
      {
        data,
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.UpdateTaskFail)
  UpdateTaskFail({ patchState }: StateContext<TaskListStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }

  @Action(fromAction.DeleteTask)
  deleteTask({ dispatch, patchState }: StateContext<TaskListStateModel>, action: fromAction.DeleteTask) {
    patchState({ loading: true });
    const task = action.payload;
    return this.taskSrv.deleteTask(task._id)
      .pipe(
        map(() => {
          dispatch(new fromAction.DeleteTaskSuccess(task));
        }),
        catchError(error => of(dispatch(new fromAction.DeleteTaskFail(error))))
      );
  }

  @Action(fromAction.DeleteTaskSuccess)
  // tslint:disable-next-line:max-line-length
  DeleteTaskSuccess({ patchState, getState, dispatch }: StateContext<TaskListStateModel>, action: fromAction.DeleteTask) {
    const task = action.payload as ITask;
    const state = getState();
    patchState(
      {
        data: [...state.data.filter((d) => {
          return d._id !== task._id;
        })],
        loading: false,
        loaded: true
      }
    );
    dispatch(new fromSubjectAction.UpdateTaskCounter({ subjectId: task.fkSubjectId, increment: false }));
  }

  @Action(fromAction.DeleteTaskFail)
  DeleteTaskFail({ patchState }: StateContext<TaskListStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }


}

