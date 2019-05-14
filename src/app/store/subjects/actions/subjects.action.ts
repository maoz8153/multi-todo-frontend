import { ISubjectAndTaskCounter, ISubject, ICreateSubjectInput } from 'src/app/core/model/subject.model';
import { IUpdateTakeCounter } from 'src/app/core/model/task.model';

export const GET_SUBJECTS_AND_TASK_COUNTER = '[SUBJECTS] GET_SUBJECTS_AND_TASK_COUNTER';
export const GET_SUBJECTS_AND_TASK_COUNTER_SUCCESS = '[SUBJECTS] GET_SUBJECTS_AND_TASK_COUNTER_SUCCESS';
export const GET_SUBJECTS_AND_TASK_COUNTER_FAIL = '[SUBJECTS] GET_SUBJECTS_AND_TASK_COUNTER_FAIL';

export const CREATE_SUBJECT = '[SUBJECTS] CREATE_SUBJECT';
export const CREATE_SUBJECT_SUCCESS = '[SUBJECTS] CREATE_SUBJECT_SUCCESS';
export const CREATE_SUBJECT_FAIL = '[SUBJECTS] CREATE_SUBJECT_FAIL';

export const UPDATE_TASK_COUNTER = '[SUBJECTS] UPDATE_TASK_COUNTER';


export class CreateSubject {

  static readonly type = CREATE_SUBJECT;

  constructor(public payload: ICreateSubjectInput) {
  }
}

export class CreateSubjectSuccess {
  static readonly type = CREATE_SUBJECT_SUCCESS;

  constructor(public payload: ISubject) {
  }
}

export class CreateSubjectFail {
  static readonly type = CREATE_SUBJECT_FAIL;

  constructor(public payload: any = null) {
  }
}

export class GetSubjectsAndTaskCounter {

  static readonly type = GET_SUBJECTS_AND_TASK_COUNTER;

  constructor(public payload: string) {
  }
}

export class GetSubjectsAndTaskCounterSuccess {
  static readonly type = GET_SUBJECTS_AND_TASK_COUNTER_SUCCESS;

  constructor(public payload: Array<ISubjectAndTaskCounter>) {
  }
}

export class GetSubjectsAndTaskCounterFail {
  static readonly type = GET_SUBJECTS_AND_TASK_COUNTER_FAIL;

  constructor(public payload: any = null) {
  }
}


export class UpdateTaskCounter {
  static readonly type = UPDATE_TASK_COUNTER;

  constructor(public payload: IUpdateTakeCounter) {
  }
}






