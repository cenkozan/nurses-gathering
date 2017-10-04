import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import 'jquery';
import 'moment';
import 'fullcalendar';
import { SelectItem } from 'primeng/primeng';
import { CarerService } from '../services/carer.service';
import { Appointment, Carer } from '../data-model';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  carers = [];
  selectedCarer: Carer;
  carerSelectItems: SelectItem[];

  header: any;

  appointment: Appointment;
  appointments: Appointment[];

  idGen: number = 100;

  dialogVisible: boolean = false;

  isLoading: boolean;

  constructor(private carerService: CarerService,
              public toast: ToastComponent,
              private cd: ChangeDetectorRef,
              private appointmentService: AppointmentService) {
  }

  ngOnInit() {
    this.carerSelectItems = [];
    this.getCarers();
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
    // this.appointmentService.
  }

  getCarers() {
    this.carerService.getCarers().subscribe(
      data => this.carers = data,
      error => console.log(error),
      () => this.fillCarerSelectItems()
    );
  }

  fillCarerSelectItems() {
    this.isLoading = false;
    this.carers.forEach(carer1 =>
      this.carerSelectItems.push({label: carer1.userName, value: carer1})
    );
  }

  saveEvent() {
    // update
    if (this.appointment.id) {
      const index: number = this.findEventIndexById(this.appointment.id);
      if (index >= 0) {
        this.selectedCarer.appointments[index] = this.appointment;
      }
    } else {
      this.appointment.id = this.idGen++;
      this.selectedCarer.appointments.push(this.appointment);
      this.appointment = null;
    }
    this.carerService.editCarer(this.selectedCarer).subscribe(
      data => this.carers = data,
      error => console.log(error),
      () => this.fillCarerSelectItems()
    );
    this.dialogVisible = false;
  }

  deleteEvent() {
    const index: number = this.findEventIndexById(this.appointment.id);
    if (index >= 0) {
      this.selectedCarer.appointments.splice(index, 1);
    }
    this.dialogVisible = false;
  }

  findEventIndexById(id: number) {
    let index = -1;
    for (let i = 0; i < this.selectedCarer.appointments.length; i++) {
      if (id === this.selectedCarer.appointments[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  handleDayClick(event) {
    this.appointment = new Appointment();
    this.appointment.start = event.date.format();
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
    this.appointment.id = e.calEvent.id;
    this.appointment.start = start.format();
    this.appointment.allDay = e.calEvent.allDay;
    this.dialogVisible = true;
  }

}
