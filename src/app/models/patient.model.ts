import {Appointment} from "./appointment.model";

export class Patient {
  id: number;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  gender?: string;
  phoneNumber?: string;
  address?: string;
  notes?: string;
  hasAllergies?: boolean;
  identificationNo?: string;
  emergencyContactName?: string;
  emergencyContactNo?: string;
  appointments?: Appointment[];

  constructor(
    id: number,
    firstName?: string,
    lastName?: string,
    dateOfBirth?: Date,
    gender?: string,
    phoneNumber?: string,
    address?: string,
    notes?: string,
    hasAllergies?: boolean,
    identificationNo?: string,
    emergencyContactName?: string,
    emergencyContactNo?: string,
    appointments?: Appointment[]
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.notes = notes;
    this.hasAllergies = hasAllergies;
    this.identificationNo = identificationNo;
    this.emergencyContactName = emergencyContactName;
    this.emergencyContactNo = emergencyContactNo;
    this.appointments = appointments;
  }
}


