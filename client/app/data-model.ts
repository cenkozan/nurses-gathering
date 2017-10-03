'use strict';

export class Client {
  names: string;
  surname: string;
  phoneNumber: string;
  email: string;
  gender: string;
  dob: string;
  address: string;
  userName: string;
  services: string;
}

export class Appointment {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: boolean = false;
  dow: string;
}

export class Carer {
  names: string;
  surname: string;
  phoneNumber: string;
  email: string;
  gender: string;
  appointments: Appointment[];
  dob: string;
  address: string;
  userName: string;
}
