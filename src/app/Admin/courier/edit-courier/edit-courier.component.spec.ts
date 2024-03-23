import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourierComponent } from './edit-courier.component';

describe('EditCourierComponent', () => {
  let component: EditCourierComponent;
  let fixture: ComponentFixture<EditCourierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCourierComponent]
    });
    fixture = TestBed.createComponent(EditCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
