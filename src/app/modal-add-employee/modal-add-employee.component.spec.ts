import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEmployeeComponent } from './modal-add-employee.component';

describe('ModalAddEmployeeComponent', () => {
  let component: ModalAddEmployeeComponent;
  let fixture: ComponentFixture<ModalAddEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddEmployeeComponent]
    });
    fixture = TestBed.createComponent(ModalAddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
