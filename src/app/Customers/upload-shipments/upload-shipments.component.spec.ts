import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadShipmentsComponent } from './upload-shipments.component';

describe('UploadShipmentsComponent', () => {
  let component: UploadShipmentsComponent;
  let fixture: ComponentFixture<UploadShipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadShipmentsComponent]
    });
    fixture = TestBed.createComponent(UploadShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
