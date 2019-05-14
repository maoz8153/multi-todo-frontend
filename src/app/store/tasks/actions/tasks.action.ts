import { ITask, ICreateTaskInput, IUpdateTakeCounter } from 'src/app/core/model/task.model';

export const GET_TASK_LIST_BY_SUBJECT = '[TASKS] GET_TASK_LIST_BY_SUBJECT';
export const GET_TASK_LIST_BY_SUBJECT_SUCCESS = '[TASKS] GET_TASK_LIST_BY_SUBJECT_SUCCESS';
export const GET_TASK_LIST_BY_SUBJECT_FAIL = '[TASKS] GET_TASK_LIST_BY_SUBJECT_FAIL';

export const CREATE_TASK = '[TASKS] CREATE_TASK';
export const CREATE_TASK_SUCCESS = '[TASKS] CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAIL = '[TASKS] CREATE_TASK_FAIL';

export const UPDATE_TASK = '[TASKS] UPDATE_TASK';
export const UPDATE_TASK_SUCCESS = '[TASKS] UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAIL = '[TASKS] UPDATE_TASK_FAIL';

export const DELETE_TASK = '[TASKS] DELETE_TASK';
export const DELETE_TASK_SUCCESS = '[TASKS] DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAIL = '[TASKS] DELETE_TASK_FAIL';

export const UPDATE_TASK_COUNTER = '[TASKS] UPDATE_TASK_COUNTER';

export class DeleteTask {

  static readonly type = DELETE_TASK;

  constructor(public payload: ITask) {
  }
}

export class DeleteTaskSuccess {
  static readonly type = DELETE_TASK_SUCCESS;

  constructor(public payload: ITask) {
  }
}

export class DeleteTaskFail {
  static readonly type = DELETE_TASK_FAIL;

  constructor(public payload: any = null) {
  }
}

export class UpdateTask {

  static readonly type = UPDATE_TASK;

  constructor(public payload: any = null) {
  }
}

export class UpdateTaskSuccess {
  static readonly type = UPDATE_TASK_SUCCESS;

  constructor(public payload: ITask) {
  }
}

export class UpdateTaskFail {
  static readonly type = UPDATE_TASK_FAIL;

  constructor(public payload: any = null) {
  }
}


export class CreateTask {

  static readonly type = CREATE_TASK;

  constructor(public payload: ICreateTaskInput) {
  }
}

export class CreateTaskSuccess {
  static readonly type = CREATE_TASK_SUCCESS;

  constructor(public payload: ITask) {
  }
}

export class CreateTaskFail {
  static readonly type = CREATE_TASK_FAIL;

  constructor(public payload: any = null) {
  }
}


export class GetTaskListBySubject {

  static readonly type = GET_TASK_LIST_BY_SUBJECT;

  constructor(public payload: string = null) {
  }
}

export class GetTaskListBySubjectSuccess {
  static readonly type = GET_TASK_LIST_BY_SUBJECT_SUCCESS;

  constructor(public payload: Array<ITask>) {
  }
}

export class GetTaskListBySubjectFail {
  static readonly type = GET_TASK_LIST_BY_SUBJECT_FAIL;

  constructor(public payload: any = null) {
  }
}


