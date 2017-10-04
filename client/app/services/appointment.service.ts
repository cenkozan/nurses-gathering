import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppointmentService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAppointments(): Observable<any> {
    return this.http.get('/api/appointments').map(res => res.json());
  }

  addAppointment(appointment): Observable<any> {
    return this.http.post('/api/appointment', JSON.stringify(appointment), this.options);
  }

  getAppointment(appointment): Observable<any> {
    return this.http.get(`/api/appointment/${appointment._id}`).map(res => res.json());
  }

  editAppointment(appointment): Observable<any> {
    return this.http.put(`/api/appointment/${appointment._id}`, JSON.stringify(appointment), this.options);
  }

  deleteAppointment(appointment): Observable<any> {
    return this.http.delete(`/api/appointment/${appointment._id}`, this.options);
  }

}
