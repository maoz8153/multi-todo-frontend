export class User {
    constructor(public _id: string, public firstName: string, public lastName: string, public gender: Gender) { }
}

export interface ICreateUserInput {
    firstName: string;
    lastName: string;
    gender: Gender;
}

export interface IUser extends ICreateUserInput {
    _id: string;
}

enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}
