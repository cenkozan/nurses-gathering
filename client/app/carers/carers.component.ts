import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { SelectItem } from 'primeng/primeng';

import { CarerService } from '../services/carer.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-carers',
  templateUrl: './carers.component.html',
  styleUrls: ['./carers.component.scss']
})

export class CarersComponent implements OnInit {

  genders: SelectItem[];
  carer = {};
  carers = [];
  isLoading = true;
  isEditing = false;

  addCarerForm: FormGroup;
  names = new FormControl('');
  surname = new FormControl('');
  phoneNumber = new FormControl('');
  email = new FormControl('', Validators.email);
  gender = new FormControl('');
  dob = new FormControl('');
  address = new FormControl('');
  userName = new FormControl('');

  constructor(private carerService: CarerService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) {
    this.genders = [];
    this.genders.push({label: 'Male', value: 'M'});
    this.genders.push({label: 'Female', value: 'F'});
    this.genders.push({label: 'Other', value: 'O'});
  }

  ngOnInit() {
    this.getCarers();
    this.addCarerForm = this.formBuilder.group({
      names: this.names,
      surname: this.surname,
      phoneNumber: this.phoneNumber,
      email: this.email,
      gender: this.gender,
      dob: this.dob,
      address: this.address,
      userName: this.userName,
    });
  }

  getCarers() {
    this.carerService.getCarers().subscribe(
      data => this.carers = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addCarer() {
    this.carerService.addCarer(this.addCarerForm.value).subscribe(
      res => {
        const newCarer = res.json();
        this.carers.push(newCarer);
        this.addCarerForm.reset();
        this.toast.setMessage('Carer added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(carer) {
    this.isEditing = true;
    this.carer = carer;
  }

  cancelEditing() {
    this.isEditing = false;
    this.carer = {};
    this.toast.setMessage('Carer editing cancelled.', 'warning');
    // reload the carers to reset the editing
    this.getCarers();
  }

  editCarer(carer) {
    this.carerService.editCarer(carer).subscribe(
      res => {
        this.isEditing = false;
        this.carer = carer;
        this.toast.setMessage('Carer edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteCarer(carer) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.carerService.deleteCarer(carer).subscribe(
        res => {
          const pos = this.carers.map(elem => elem._id).indexOf(carer._id);
          this.carers.splice(pos, 1);
          this.toast.setMessage('Carer deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
