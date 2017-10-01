import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  isLoading = false;

  constructor(public toast: ToastComponent) { }

  ngOnInit() {
  }

}
