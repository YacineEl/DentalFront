import {Patient} from "./patient.model";

export class Appointment {
  id?: number;
  dateTime?: Date;
  patient?: Patient;
  payment?: Number;

  constructor(id?: number, dateTime?: Date, patient?: Patient, payment?: Number) {
    this.id = id;
    this.dateTime = dateTime;
    this.patient = patient;
    this.payment = payment;
  }
}
