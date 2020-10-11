import {Component, Inject, OnInit} from '@angular/core';
import {IPostsService, postServiceToken} from '../providers/posts.service';
import {IPost} from '../providers/posts.domain';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {

  public posts$: Observable<IPost[]>;

  constructor(@Inject(postServiceToken) private postsService: IPostsService) { }

  public ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

  public trackByFn(index: number, item: IPost): number {
    return item.id;
  }

}
