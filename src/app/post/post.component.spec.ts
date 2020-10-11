import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = { id: 1, userId: 1, body: 'lorem', title: 'ipsum' };
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
