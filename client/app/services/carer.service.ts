import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarerService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getCarers(): Observable<any> {
    return this.http.get('/api/carers').map(res => res.json());
  }

  addCarer(carer): Observable<any> {
    return this.http.post('/api/carer', JSON.stringify(carer), this.options);
  }

  getCarer(carer): Observable<any> {
    return this.http.get(`/api/carer/${carer._id}`).map(res => res.json());
  }

  editCarer(carer): Observable<any> {
    return this.http.put(`/api/carer/${carer._id}`, JSON.stringify(carer), this.options);
  }

  deleteCarer(carer): Observable<any> {
    return this.http.delete(`/api/carer/${carer._id}`, this.options);
  }

}
