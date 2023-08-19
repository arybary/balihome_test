import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user.model';
import { apiUrlGithub } from 'src/app/core/constants';

@Injectable({
  providedIn: 'root',
})
export class GithubUsersApiService {
  apiUrl = apiUrlGithub;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      catchError((error) => {
        console.error('Error loading users', error);
        return throwError(error);
      })
    );
  }

  searchUsers(username: string): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.apiUrl}/search/users?q=${username}`)
      .pipe(
        catchError((error) => {
          console.error('Error searching users', error);
          return throwError(error);
        })
      );
  }
}
