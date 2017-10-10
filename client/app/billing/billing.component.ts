import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { CarerService } from '../services/carer.service';
import { ClientService } from '../services/client.service';
import { AppointmentService } from '../services/appointment.service';
import { Appointment, Bill, Carer, Client } from '../data-model';
import * as moment from 'moment';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  isLoading = false;

  startDate: Date = new Date();
  endDate: Date = new Date();

  appointments: Appointment[];
  appointmentsInRange: Appointment[];

  clients: Client[];
  carers: Carer[];

  clientBills: Bill[];
  carerBills: Bill[];

  constructor(private carerService: CarerService,
              private clientService: ClientService,
              public toast: ToastComponent,
              private cd: ChangeDetectorRef,
              private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointmentService.getAppointments().subscribe(
      data => this.appointments = data,
      error => console.log(error),
    );
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.log(error),
    );
    this.carerService.getCarers().subscribe(
      data => this.carers = data,
      error => console.log(error),
    );
    this.clientBills = [];
    this.carerBills = [];
    this.appointmentsInRange = [];
  }

  generateBills() {
    console.log(this.appointments);
    console.log(this.startDate, this.endDate);
    this.appointments.forEach((appointment) => {
      // if (moment(appointment.start).isAfter(this.startDate) && moment(appointment.end).isBefore(this.endDate)) {
      if (moment(appointment.start).isAfter(this.startDate) && moment(appointment.end).isBefore(this.endDate)) {
        this.appointmentsInRange.push(appointment);
      }
    });
    // this.appointmentsInRange = this.appointments.filter( ap => ap.start >= this.startDate && ap.end <= this.endDate);
    console.log(this.appointmentsInRange);
    // for clients
    this.appointmentsInRange.forEach(a => {
      if (a.allDay) {
        this.clientBills.push(new Bill(this.findClientUserName(a.client), 8, a.rate, 8 * a.rate, false));
        this.carerBills.push(new Bill(this.findCarerUserName(a.client), 8, a.rate, 8 * a.rate, true));
      } else {
        const endDay = moment(a.end);
        const startDay = moment(a.start);
        if (endDay.isAfter(startDay)) {
          const dayDiff = endDay.diff(startDay, 'day');
          console.log('dayDiff: ', dayDiff);
          const hourDiff = endDay.hours() - startDay.hours();
          console.log('hourDiff: ', hourDiff);
          this.clientBills.push(new Bill(this.findClientUserName(a.client), (dayDiff + 1) * hourDiff, a.rate,
            (dayDiff + 1) * hourDiff * a.rate, false));
          this.carerBills.push(new Bill(this.findCarerUserName(a.carer), (dayDiff + 1) * hourDiff, a.rate,
            (dayDiff + 1) * hourDiff * a.rate, true));
        }
      }
    });
    console.log('done');
    console.log(this.clientBills);
    console.log(this.carerBills);
    this.cd.detectChanges();
  }

  findCarerUserName(_id) {
    const x = this.carers.filter(c => c._id === _id);
    if (x.length > 0) {
      return x[0].userName;
    }
  }

  findClientUserName(_id) {
    const x = this.clients.filter(c => c._id === _id);
    if (x.length > 0) {
      return x[0].userName;
    }
  }

}
