import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { SelectItem } from 'primeng/primeng';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Client, Temperature, Weight } from '../data-model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  client:  Client;
  clients: Client[];
  isLoading = true;

  isEditing = false;

  genders: SelectItem[];

  addClientForm: FormGroup;
  addTemperatureForm: FormGroup;
  addWeightForm: FormGroup;

  names = new FormControl('');
  surname = new FormControl('');
  phoneNumber = new FormControl('');
  email = new FormControl('', Validators.email);
  gender = new FormControl('');
  dob = new FormControl('');
  address = new FormControl('');
  userName = new FormControl('');
  services = new FormControl('');

  temperature = new FormControl('');
  dateOfTakingTemperature = new FormControl('');

  weight = new FormControl('');
  dateOfTakingWeight = new FormControl('');

  constructor(private clientService: ClientService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) {
    this.genders = [];
    this.genders.push({label: 'Male', value: 'M'});
    this.genders.push({label: 'Female', value: 'F'});
    this.genders.push({label: 'Other', value: 'O'});
    this.clients = [];
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
      address: this.address,
      userName: this.userName,
      services: this.services,
    });
    this.addTemperatureForm = this.formBuilder.group({
      dateOfTakingTemperature: this.dateOfTakingTemperature,
      temperature: this.temperature
    });
    this.addWeightForm = this.formBuilder.group({
      dateOfTakingWeight: this.dateOfTakingWeight,
      weight: this.weight
    });
  }

  getClients() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  enableEditing(client) {
    this.isEditing = true;
    this.client = client;
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

  enterClientRelatedData(client) {
    this.client = client;
  }

  cancelEditing() {
    this.isEditing = false;
    this.client = new Client();
    this.toast.setMessage('Client editing cancelled.', 'warning');
    // reload the clients to reset the editing
    this.getClients();
  }

  editClient(client) {
    this.clientService.editClient(client).subscribe(
      res => {
        this.isEditing = false;
        this.client = client;
        this.toast.setMessage('Client edited successfully.', 'success');
      },
      error => console.log(error)
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

  addClientWeight(client) {
    const weight = new Weight();
    weight.date = this.addWeightForm.value.dateOfTakingWeight;
    weight.weight = this.addWeightForm.value.weight;
    if (!this.client.weights || this.client.weights.length === 0) {
      this.client.weights = [];
    }
    this.client.weights.push(weight);
    this.editClient(this.client);
  }

  addClientTemperature(client) {
    const temperature = new Temperature();
    temperature.date = this.addTemperatureForm.value.dateOfTakingTemperature;
    temperature.temperature = this.addTemperatureForm.value.temperature;
    if (!this.client.temperatures || this.client.temperatures.length === 0) {
      this.client.temperatures = [];
    }
    this.client.temperatures.push(temperature);
    this.editClient(this.client);
  }
}
