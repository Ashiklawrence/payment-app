import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectstudentComponent } from './selectstudent.component';

describe('SelectstudentComponent', () => {
  let component: SelectstudentComponent;
  let fixture: ComponentFixture<SelectstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectstudentComponent]
    });
    fixture = TestBed.createComponent(SelectstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
