import {Component, HostListener, Inject, Input} from '@angular/core';
import {IPost} from '../providers/posts.domain';
import {IPostsService, postServiceToken} from '../providers/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input()
  public post: IPost;

  @HostListener('click', ['$event'])
  public onCardClicked(event: Event): void {
    this.postsService.flip(this.post.id);
  }

  constructor(@Inject(postServiceToken) public postsService: IPostsService) { }
}
