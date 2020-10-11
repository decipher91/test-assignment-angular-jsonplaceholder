import {API_URL, IPostsService, POSTS_SERVICE, postServiceToken} from './posts.service';
import {IPost} from './posts.domain';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DogService', () => {
  let httpTestingController: HttpTestingController;
  let postsService: IPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [POSTS_SERVICE],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    postsService = TestBed.inject(postServiceToken);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return expected posts observable', () => {
    const expectedData: IPost[] =
      [{ id: 1, userId: 1, body: 'lorem', title: 'ipsum' }, { id: 2, userId: 1, body: 'lorem', title: 'ipsum' }];

    postsService.getPosts().subscribe(
      (posts) => {
        expect(posts).not.toBe(null);
        expect(posts.length).toEqual(2);
      });

    const req = httpTestingController
      .expectOne(API_URL);

    req.flush(expectedData);
  });
});
