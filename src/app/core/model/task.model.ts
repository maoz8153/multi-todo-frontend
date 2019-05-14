export class Task {
    constructor(_id: string, title: string, complited: boolean, fkSubjectId: string) { }
}

export interface ICreateTaskInput {
    title: string;
    complited: boolean;
    fkSubjectId: string;
}

export interface ITask extends ICreateTaskInput {
    _id: string;
}

export interface IUpdateTakeCounter {
    subjectId: string;
    increment: boolean;
}
