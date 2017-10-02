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

export class Event {
  title: string;
  start: string;
  end: string;
  dow: string;
}

export class Carer {
  names: string;
  surname: string;
  phoneNumber: string;
  email: string;
  gender: string;
  events: Event[];
  dob: string;
  address: string;
  userName: string;
}

export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: boolean = true;
}

// export const gender: ['M', 'F', 'O'];
