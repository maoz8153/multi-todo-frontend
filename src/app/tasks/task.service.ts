import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ITask, ICreateTaskInput } from '../core/model/task.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  getTaskListBySubject(subjectId: string): Observable<ITask[]> {
    const url = `${this.apiUrl}/subjects/${subjectId}/tasks`;
    return this.http.get<ITask[]>(url)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createTask(newTask: ICreateTaskInput): Observable<ITask> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ITask>(`${this.apiUrl}/tasks`, newTask, { headers })
      .pipe(
        tap(data => console.log('new task has been created: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateTask(task: ITask): Observable<ITask> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/tasks/${task._id}`;
    return this.http.put<ITask>(url, task, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + task._id)),
        map(() => task),
        catchError(this.handleError)
      );
  }

  deleteTask(taskId: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/tasks/${taskId}`;
    return this.http.delete<ITask>(url, { headers })
      .pipe(
        tap(() => console.log('deleted task: ' + taskId)),
        catchError(this.handleError)
      );
  }


  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
