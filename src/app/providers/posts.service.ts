import {Injectable, InjectionToken, Provider} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from './posts.domain';

export const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export interface IPostsService {
  getPosts(): Observable<IPost[]>;
}

@Injectable()
export class PostsService implements IPostsService {
  constructor(private http: HttpClient) { }

  public getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(API_URL);
  }
}

export const postServiceToken: InjectionToken<IPostsService> = new InjectionToken('postServiceToken');

export const POSTS_SERVICE: Provider = {
  provide: postServiceToken,
  useClass: PostsService,
  deps: [HttpClient],
};
