import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostsListComponentModule} from './posts-list/posts-list.component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {POSTS_SERVICE} from './providers/posts.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PostsListComponentModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    POSTS_SERVICE,
  ]
})
export class AppModule { }
