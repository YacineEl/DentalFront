import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentDialogComponent } from './add-appointment-dialog.component';

describe('AddAppontmentDialogComponent', () => {
  let component: AddAppointmentDialogComponent;
  let fixture: ComponentFixture<AddAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppointmentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
