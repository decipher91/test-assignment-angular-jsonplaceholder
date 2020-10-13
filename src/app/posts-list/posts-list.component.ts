import {Component, Inject} from '@angular/core';
import {IPostsService, postServiceToken} from '../providers/posts.service';
import {IPost} from '../providers/posts.domain';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {

  constructor(@Inject(postServiceToken) public postsService: IPostsService) { }

  public trackByFn(index: number, item: IPost): number {
    return item.id;
  }

}
