import { Component, OnInit  } from '@angular/core';
import {ToastComponent} from '../shared/toast/toast.component';
import 'jquery';
import 'moment';
import 'fullcalendar';
import { SelectItem } from 'primeng/primeng';
import * as dataModel from '../data-model';
import { CarerService } from '../services/carer.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  carers = [];
  selectedCarer: {};
  carerSelectItems: SelectItem[];

  header: any;

  event: dataModel.MyEvent;
  events: any[];

  idGen: number = 100;

  dialogVisible: boolean = false;

  isLoading: boolean;

  constructor(private carerService: CarerService,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.carerSelectItems = [];
    this.getCarers();
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
    this.events = [
      {
        'title': 'All Day Event',
        'start': '2016-01-01',
        'end' : '2016-01-02'
      },
      {
        'title': 'Long Event',
        'start': '2016-01-07',
        'end': '2016-01-10'
      },
      {
        'title': 'Repeating Event',
        'start': '2016-01-09T16:00:00',
        'end' : '2016-01-02'
      },
      {
        'title': 'Repeating Event',
        'start': '2016-01-16T16:00:00',
        'end' : '2016-01-02'
      },
      {
        'title': 'Conference',
        'start': '2016-01-11',
        'end': '2016-01-13'
      }
    ];
  }

  carersDropDownChanged() {
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
      this.carerSelectItems.push({label: carer1.userName, value: carer1.email})
    );
  }

  saveEvent() {
    // update
    if (this.event.id) {
      const index: number = this.findEventIndexById(this.event.id);
      if (index >= 0) {
        this.events[index] = this.event;
      }
    } else {
      this.event.id = this.idGen++;
      this.events.push(this.event);
      this.event = null;
    }
    this.dialogVisible = false;
  }

  deleteEvent() {
    const index: number = this.findEventIndexById(this.event.id);
    if (index >= 0) {
      this.events.splice(index, 1);
    }
    this.dialogVisible = false;
  }

  findEventIndexById(id: number) {
    let index = -1;
    for (let i = 0; i < this.events.length; i++) {
      if (id === this.events[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  handleDayClick(event) {
    this.event = new dataModel.MyEvent();
    this.event.start = event.date.format();
    this.dialogVisible = true;
    // trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    // this.cd.detectChanges();
  }

  handleEventClick(e) {
    this.event = new dataModel.MyEvent();
    this.event.title = e.calEvent.title;
    const start = e.calEvent.start;
    const end = e.calEvent.end;
    if (e.view.name === 'month') {
      start.stripTime();
    }
    if (end) {
      end.stripTime();
      this.event.end = end.format();
    }
    this.event.id = e.calEvent.id;
    this.event.start = start.format();
    this.event.allDay = e.calEvent.allDay;
    this.dialogVisible = true;
  }

}
