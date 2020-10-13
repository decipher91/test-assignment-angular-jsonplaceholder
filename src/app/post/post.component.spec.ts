import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { PostComponent } from './post.component';
import {POSTS_SERVICE, postServiceToken} from '../providers/posts.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      providers: [POSTS_SERVICE],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    TestBed.inject(postServiceToken);
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = { id: 1, userId: 1, body: 'lorem', title: 'ipsum', faceUp: true };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call on click event when clicked', fakeAsync(() => {
    spyOn(component, 'onCardClicked');

    const card = fixture.debugElement.nativeElement;
    card.click();
    tick();
    expect(component.onCardClicked).toHaveBeenCalled();
  }));
});
