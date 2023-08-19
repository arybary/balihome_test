import { TestBed } from '@angular/core/testing';

import { GithubUsersApiService } from './github-users-api.service';

describe('GithubUsersApiService', () => {
  let service: GithubUsersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubUsersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
