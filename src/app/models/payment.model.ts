import { Patient } from "./patient.model";

export class Payment {
  id?: number;
  date?: Date;
  amount?: number;
  patient?: Patient;

  constructor(id?: number, date?: Date, amount?: number, patient?: Patient) {
    this.id = id;
    this.date = date;
    this.amount = amount;
    this.patient = patient;
  }
}
