import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  GitHubUser,
  GitHubUserSearchResponse,
  SearchUsers,
  User,
} from '../../users/model/user.model';
import { apiUrlGithub, currencUsersForPage } from 'src/app/core/constants';
import { Repos } from 'src/app/repos/model/repos.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GithubUsersApiService {
  private apiUrl = apiUrlGithub;
  perPage = currencUsersForPage;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getUsers(): Observable<User[]> {
    const url = `${this.apiUrl}/users`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', 100);
    queryParams = queryParams.append('per_page', this.perPage);
    return this.http.get<GitHubUser[]>(url, { params: queryParams }).pipe(
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

  searchUsers(query: string, pageCurrent: number): Observable<SearchUsers> {
    const url = `${this.apiUrl}/search/users`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', query);
    queryParams = queryParams.append('page', pageCurrent);
    queryParams = queryParams.append('per_page', this.perPage);
    return this.http
      .get<GitHubUserSearchResponse>(url, { params: queryParams })
      .pipe(
        map(({ items, total_count }) => {
          const users = items.map(({ id, login, avatar_url }) => ({
            id,
            login,
            avatar_url,
          }));
          return { total: total_count, users };
        }),
        catchError((error) => {
          console.error('Error searching users', error);
          return throwError(error);
        })
      );
  }
  getUserRepos(login: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(`${this.apiUrl}/users/${login}/repos`).pipe(
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
