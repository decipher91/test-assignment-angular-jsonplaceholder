import {Injectable, InjectionToken, Provider} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {IPost, IPostDto} from './posts.domain';
import {map} from 'rxjs/operators';

export const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export interface IPostsService {
  posts$: Observable<IPost[]>;

  flip(id: number): void;
}

@Injectable()
export class PostsService implements IPostsService {

  private readonly _posts = new BehaviorSubject<IPost[]>([]);
  public readonly posts$ = this._posts.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<IPost[]>(API_URL)
      .pipe(
        map((posts: IPostDto[]) => posts.map((post) => {
          return {
            ...post,
            faceUp: true,
          };
        }))
      )
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }

  public flip(id: number): void {
    this.posts = this.posts.map((post: IPost) => {
      if (post.id === id) {
        post.faceUp = !post.faceUp;
      }
      return post;
    });
  }

  private get posts(): IPost[] {
    return this._posts.getValue();
  }

  private set posts(posts: IPost[]) {
    this._posts.next(posts);
  }


}

export const postServiceToken: InjectionToken<IPostsService> = new InjectionToken('postServiceToken');

export const POSTS_SERVICE: Provider = {
  provide: postServiceToken,
  useClass: PostsService,
  deps: [HttpClient],
};
