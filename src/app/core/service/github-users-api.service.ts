import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  GitHubUser,
  GitHubUserSearchResponse,
  User,
} from '../../users/model/user.model';
import { apiUrlGithub } from 'src/app/core/constants';
import { Repos } from 'src/app/repos/model/repos.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GithubUsersApiService {
  private apiUrl = apiUrlGithub;
  private login = this.route.snapshot.paramMap.get('login')!;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getUsers(): Observable<User[]> {
    return this.http.get<GitHubUser[]>(`${this.apiUrl}/users`).pipe(
      map((users) =>
        users.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }))
      ),
      catchError((error) => {
        console.error('Error searching users', error);
        return throwError(error);
      })
    );
  }

  searchUsers(query: string): Observable<User[]> {
    return this.http
      .get<GitHubUserSearchResponse>(`${this.apiUrl}/search/users`, {
        params: { q: query },
      })
      .pipe(
        map(({ items }) =>
          items.map(({ id, login, avatar_url }) => ({
            id,
            login,
            avatar_url,
          }))
        ),
        catchError((error) => {
          console.error('Error searching users', error);
          return throwError(error);
        })
      );
  }
  getUserRepos(): Observable<Repos[]> {
    console.log(this.login);
    return this.http
      .get<Repos[]>(`${this.apiUrl}/users/${this.login}/repos`)
      .pipe(
        map((repos) =>
          repos.map(
            ({ id, name, description, language, has_issues, html_url }) => ({
              id,
              name,
              description,
              language,
              has_issues,
              html_url,
            })
          )
        ),
        catchError((error) => {
          console.error('Error searching users', error);
          return throwError(error);
        })
      );
  }
}
