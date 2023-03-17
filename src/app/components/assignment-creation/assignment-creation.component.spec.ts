import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCreationComponent } from './assignment-creation.component';

describe('AssignmentCreationComponent', () => {
  let component: AssignmentCreationComponent;
  let fixture: ComponentFixture<AssignmentCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
