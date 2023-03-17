import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCommentComponent } from './class-comment.component';

describe('ClassCommentComponent', () => {
  let component: ClassCommentComponent;
  let fixture: ComponentFixture<ClassCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
