import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentEditionComponent } from './asignment-edition.component';

describe('AsignmentEditionComponent', () => {
  let component: AsignmentEditionComponent;
  let fixture: ComponentFixture<AsignmentEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignmentEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignmentEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
