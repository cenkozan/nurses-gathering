import { Component, OnInit } from '@angular/core';
import {ToastComponent} from '../shared/toast/toast.component';
import 'jquery';
import 'moment';
import 'fullcalendar';
import { ScheduleModule } from 'primeng/primeng';
import { Carer } from '../data-model';
import { CarerService } from '../services/carer.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  events: any[];
  carers: Carer[];
  selectedCarer: Carer;

  isLoading: boolean;

  constructor(private carerService: CarerService,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.getCarers();
    this.events = [
      {
        'title': 'All Day Event',
        'start': '2016-01-01'
      },
      {
        'title': 'Long Event',
        'start': '2016-01-07',
        'end': '2016-01-10'
      },
      {
        'title': 'Repeating Event',
        'start': '2016-01-09T16:00:00'
      },
      {
        'title': 'Repeating Event',
        'start': '2016-01-16T16:00:00'
      },
      {
        'title': 'Conference',
        'start': '2016-01-11',
        'end': '2016-01-13'
      }
    ];
  }

  getCarers() {
    this.carerService.getCarers().subscribe(
      data => this.carers = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  clicked() {
    this.selectedCarer
      .populate()
  }
}
