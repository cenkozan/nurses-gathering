import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
declare var google: any;

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  isLoading: boolean;

  options: any;

  overlays: any[];

  constructor(public toast: ToastComponent) { }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(51.508742, -0.120850),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(document.getElementById("gmap"), mapProp);
    this.options = {
      center: {lat: 51.5074, lng: 0.12787},
      zoom: 1
    };
  }

}
