import {Patient} from "./patient.model";
import {Act} from "./act.model";

export class Appointment {
  id?: number;
  dateTime?: Date;
  patient?: Patient;
  validationStatus?: boolean;
  acts: Act[] = [];

  constructor(id?: number, dateTime?: Date, patient?: Patient, validationStatus?: boolean, acts?: Act[]) {
    this.id = id;
    this.dateTime = dateTime;
    this.patient = patient;
    this.validationStatus = validationStatus;
    this.acts = acts || []; // If acts is undefined, initialize to an empty array
  }
}
