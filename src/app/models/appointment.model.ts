import {Patient} from "./patient.model";

export class Appointment {
  id?: number;
  dateTime?: Date;
  patient?: Patient;
  isValidated?:boolean;

  constructor(id?: number, dateTime?: Date, patient?: Patient, isValidated?:boolean) {
    this.id = id;
    this.dateTime = dateTime;
    this.patient = patient;
    this.isValidated= isValidated;
  }
}
