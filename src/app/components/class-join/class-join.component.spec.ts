import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassJoinComponent } from './class-join.component';

describe('ClassJoinComponent', () => {
  let component: ClassJoinComponent;
  let fixture: ComponentFixture<ClassJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
