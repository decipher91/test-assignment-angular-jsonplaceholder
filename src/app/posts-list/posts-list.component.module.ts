import {NgModule} from '@angular/core';
import {PostsListComponent} from './posts-list.component';
import {HttpClientModule} from '@angular/common/http';
import {PostComponentModule} from '../post/post.component.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    PostComponentModule,
    HttpClientModule,
  ],
  exports: [
    PostsListComponent
  ]
})
export class PostsListComponentModule {
}
