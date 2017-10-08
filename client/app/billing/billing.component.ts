import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { CarerService } from '../services/carer.service';
import { ClientService } from '../services/client.service';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  isLoading = false;

  startDate: Date = new Date();
  endDate: Date = new Date();

  constructor(private carerService: CarerService,
              private clientService: ClientService,
              public toast: ToastComponent,
              private appointmentService: AppointmentService) { }

  ngOnInit() {
  }

}
