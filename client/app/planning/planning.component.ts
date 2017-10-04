import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import 'jquery';
import 'moment';
import 'fullcalendar';
import { SelectItem } from 'primeng/primeng';
import { CarerService } from '../services/carer.service';
import { Appointment, Carer, Client } from '../data-model';
import { AppointmentService } from '../services/appointment.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  carers = [];
  selectedCarer: Carer;
  carerSelectItems: SelectItem[];

  clients = [];
  selectedClient: Client;
  clientSelectItems: SelectItem[];

  header: any;

  appointment: Appointment;
  appointments: Appointment[];

  idGen: number = 100;

  dialogVisible: boolean = false;

  isLoading: boolean;

  constructor(private carerService: CarerService,
              private clientService: ClientService,
              public toast: ToastComponent,
              private cd: ChangeDetectorRef,
              private appointmentService: AppointmentService) {
  }

  ngOnInit() {
    this.carerSelectItems = [];
    this.clientSelectItems = [];
    this.getCarers();
    this.getClients();
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }

  carersDropDownChanged() {
    if (!this.selectedCarer.appointments) {
      this.selectedCarer.appointments = [];
    }
    this.appointmentService.getCarersAppointments(this.selectedCarer).subscribe(
      data => this.appointments = data,
      error => console.log(error),
      () => console.log('appointments: ', this.appointments)
    );
  }

  getCarers() {
    this.carerService.getCarers().subscribe(
      data => this.carers = data,
      error => console.log(error),
      () => this.fillCarerSelectItems()
    );
  }

  getClients() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.log(error),
      () => this.fillClientSelectItems()
    );
  }

  fillCarerSelectItems() {
    this.isLoading = false;
    if (this.carers) {
      this.carers.forEach(carer1 =>
        this.carerSelectItems.push({label: carer1.userName, value: carer1})
      );
    }
  }

  fillClientSelectItems() {
    console.log('clients are: ', this.clients);
    this.isLoading = false;
    if (this.clients) {
      this.clients.forEach(client1 =>
        this.clientSelectItems.push({label: client1.userName, value: client1})
      );
    }
  }

  saveEvent() {
    this.appointment.carer = this.selectedCarer._id;
    this.appointment.client = this.selectedClient._id;
    // update
    if (this.appointment._id) {
      const index: number = this.findEventIndexById(this.appointment._id);
      if (index >= 0) {
        this.appointments[index] = this.appointment;
        this.appointmentService.editAppointment(this.appointment).subscribe(
          data => {},
          error => console.log(error),
        );
      }
    } else {
      // this.appointment.id = this.idGen++;
      this.selectedCarer.appointments.push(this.appointment);
      this.appointmentService.addAppointment(this.appointment).subscribe(
        data => {},
        error => console.log(error),
        );
    }
    this.appointment = null;
    this.dialogVisible = false;
    this.ngOnInit();
  }

  deleteEvent() {
    const index: number = this.findEventIndexById(this.appointment._id);
    if (index >= 0) {
      this.selectedCarer.appointments.splice(index, 1);
    }
    this.dialogVisible = false;
  }

  findEventIndexById(id: string) {
    let index = -1;
    for (let i = 0; i < this.selectedCarer.appointments.length; i++) {
      if (id === this.selectedCarer.appointments[i]._id) {
        index = i;
        break;
      }
    }
    return index;
  }

  handleDayClick(event) {
    this.appointment = new Appointment();
    this.appointment.start = event.date.format();
    // this.appointment.
    this.dialogVisible = true;
    // trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    this.cd.detectChanges();
  }

  handleEventClick(e) {
    this.appointment = new Appointment();
    this.appointment.title = e.calEvent.title;
    const start = e.calEvent.start;
    const end = e.calEvent.end;
    if (e.view.name === 'month') {
      start.stripTime();
    }
    if (end) {
      end.stripTime();
      this.appointment.end = end.format();
    }
    this.appointment._id = e.calEvent.id;
    this.appointment.start = start.format();
    this.appointment.allDay = e.calEvent.allDay;
    this.dialogVisible = true;
  }

}
