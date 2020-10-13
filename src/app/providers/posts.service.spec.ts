import {API_URL, IPostsService, POSTS_SERVICE, postServiceToken} from './posts.service';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {IPost} from './posts.domain';
import {skip} from 'rxjs/operators';

describe('PostsService', () => {
  let httpTestingController: HttpTestingController;
  let postsService: IPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [POSTS_SERVICE],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    postsService = TestBed.inject(postServiceToken);
    httpTestingController.expectOne({
      url: API_URL,
      method: 'get'
    }).flush([{ id: 17, userId: 1, body: 'lorem', title: 'ipsum', faceUp: true }]);

    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('data should be requested when service is used', () => {

      postsService.posts$.subscribe((posts: IPost[]) => {
        const postToAssert = posts.find((post: IPost) => post.id === 17);
        expect(postToAssert.faceUp).toEqual(true);
      });
    });

  it('data should be requested when service is used', () => {

    postsService.posts$.pipe(skip(1)).subscribe((posts: IPost[]) => {
      const postToAssert = posts.find((post: IPost) => post.id === 17);
      expect(postToAssert.faceUp).toEqual(false);
    });

    postsService.flip(17);
  });
});
