import {Component, HostListener, Input} from '@angular/core';
import {IPost} from '../providers/posts.domain';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input()
  public post: IPost;

  public faceUp: boolean = true;

  @HostListener('click', ['$event'])
  public onCardClicked(event: Event): void {
    this.faceUp = !this.faceUp;
  }

  constructor() { }
}
