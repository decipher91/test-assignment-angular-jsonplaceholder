import {MatCardModule} from '@angular/material/card';
import {NgModule} from '@angular/core';
import {PostComponent} from './post.component';
import {POSTS_SERVICE} from '../providers/posts.service';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
  ],
  exports: [
    PostComponent
  ],
  providers: [
    POSTS_SERVICE,
  ]
})
export class PostComponentModule {
}
