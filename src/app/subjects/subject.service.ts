import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ISubjectAndTaskCounter, ICreateSubjectInput, ISubject } from '../core/model/subject.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private apiUrl = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  getSubjectsAndTaskCounter(userId: string): Observable<ISubjectAndTaskCounter[]> {
    const url = `${this.apiUrl}/users/${userId}/subjects`;
    return this.http.get<ISubjectAndTaskCounter[]>(url)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createSubject(newSubject: ICreateSubjectInput): Observable<ISubject> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ISubject>(`${this.apiUrl}/subjects`, newSubject, { headers })
      .pipe(
        tap(data => console.log('new Subject created: ' + JSON.stringify(data))),
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
