import {Patient} from "./patient.model";

export class Appointment {
  id?: number;
  dateTime?: Date;
  patient?: Patient;

  constructor(id?: number, dateTime?: Date, patient?: Patient) {
    this.id = id;
    this.dateTime = dateTime;
    this.patient = patient;
  }
}
