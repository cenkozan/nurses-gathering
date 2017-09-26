import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import {SelectItem} from 'primeng/primeng';

import { ClientService } from '../services/client.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  genders: SelectItem[];
  client = {};
  clients = [];
  isLoading = true;
  isEditing = false;
  isAdding = false;

  addClientForm: FormGroup;
  names = new FormControl('');
  surname = new FormControl('');
  phoneNumber = new FormControl('');
  email = new FormControl('', Validators.email);
  gender = new FormControl('');
  dob = new FormControl('');
  weight = new FormControl('');
  address = new FormControl('');
  userName = new FormControl('');
  conditions = new FormControl('');
  additionalServices = new FormControl('');
  contacts = new FormControl('');
  medicines = new FormControl('');

  constructor(private clientService: ClientService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) {
    this.genders = [];
    this.genders.push({label: 'Male', value: 'M'});
    this.genders.push({label: 'Female', value: 'F'});
    this.genders.push({label: 'Other', value: 'O'});
  }

  ngOnInit() {
    this.getClients();
    this.addClientForm = this.formBuilder.group({
      names: this.names,
      surname: this.surname,
      phoneNumber: this.phoneNumber,
      email: this.email,
      gender: this.gender,
      dob: this.dob,
      weight: this.weight,
      address: this.address,
      username: this.userName,
      conditions: this.conditions,
      additionalServices: this.additionalServices,
      contacts: this.contacts,
      medicines: this.medicines
    });
  }

  getClients() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addClient() {
    this.clientService.addClient(this.addClientForm.value).subscribe(
      res => {
        const newClient = res.json();
        this.clients.push(newClient);
        this.addClientForm.reset();
        this.toast.setMessage('Client added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteClient(client) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.clientService.deleteClient(client).subscribe(
        res => {
          const pos = this.clients.map(elem => elem._id).indexOf(client._id);
          this.clients.splice(pos, 1);
          this.toast.setMessage('Client deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }
}
