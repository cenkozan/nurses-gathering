import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { Http } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../data-model';
import { SelectItem } from 'primeng/primeng';
import * as moment from 'moment';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  isLoading = false;

  data: any;
  options: any;

  clients: Client[];
  selectedClient: Client;

  clientSelectItems: SelectItem[];

  constructor(private clientService: ClientService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) {
    const joe = {
      title: {
        text: 'Simple Date-Time Chart'
      },
      axisX: {
        title: 'timeline',
        gridThickness: 2
      },
      axisY: {
        title: 'Downloads'
      },
      data: [
        {
          type: 'area',
          dataPoints: [
            {x: new Date(2012, 0o1, 1), y: 26},
            {x: new Date(2012, 0o1, 3), y: 38},
            {x: new Date(2012, 0o1, 5), y: 43},
            {x: new Date(2012, 0o1, 7), y: 29},
            {x: new Date(2012, 0o1, 11), y: 41},
            {x: new Date(2012, 0o1, 13), y: 54},
            {x: new Date(2012, 0o1, 20), y: 66},
            {x: new Date(2012, 0o1, 21), y: 60},
            {x: new Date(2012, 0o1, 25), y: 53},
            {x: new Date(2012, 0o1, 27), y: 60}

          ]
        }
      ]
    };
  }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.log(error),
    );
    this.clientSelectItems = [];
    // this.reportSelectItems = [];
    // this.reportSelectItems.push({label: 'Temperature Report', value: 0})
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.log(error),
      () => this.fillClientSelectItems()
    );
  }

  generateWeightReport() {
    const weightData = [];
    this.selectedClient.weights.forEach(t => {
      const x = moment(t.date);
      weightData.push({x: t.date, y: t.weight});
    });
    console.log(weightData);
    this.data = {
      labels: [new Date(2017, 8), new Date(2017, 9), new Date(2017, 10), new Date(2017, 11)],
      datasets: [
        {
          label: 'Weight',
          data: weightData
        }
      ]
    };
    this.options = {
      title: {
        display: true,
        text: 'Weight',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      },
      responsive: true,
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'month',
            tooltipFormat: 'lll',
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'value'
          }
        }]
      }
    };
  }

  generateTemperatureReport() {
    const temperatureData = [];
    this.selectedClient.temperatures.forEach(t => {
      const x = moment(t.date);
      temperatureData.push({x: t.date, y: t.temperature});
    });
    console.log(temperatureData);
    this.data = {
      labels: [new Date(2017, 8), new Date(2017, 9), new Date(2017, 10), new Date(2017, 11)],
      datasets: [
        {
          label: 'Temperature',
          data: temperatureData
        }
      ]
    };
    this.options = {
      title: {
        display: true,
        text: 'Temperature',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      },
      responsive: true,
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'month',
            tooltipFormat: 'lll',
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'value'
          }
        }]
      }
    };
  }

  fillClientSelectItems() {
    this.isLoading = false;
    if (this.clients) {
      this.clients.forEach(client1 =>
        this.clientSelectItems.push({label: client1.userName, value: client1})
      );
    }
  }

}
