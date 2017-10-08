'use strict';
import * as moment from 'moment';

export class Client {
  _id: string;
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
  _id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean = false;
  dow: string;
  rate: number = 50;
  carer: string;
  client: string;
}

export class Carer {
  _id: string;
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
