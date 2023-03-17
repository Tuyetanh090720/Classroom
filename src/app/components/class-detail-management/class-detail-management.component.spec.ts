import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDetailManagementComponent } from './class-detail-management.component';

describe('ClassDetailManagementComponent', () => {
  let component: ClassDetailManagementComponent;
  let fixture: ComponentFixture<ClassDetailManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassDetailManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDetailManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
