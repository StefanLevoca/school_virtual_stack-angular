import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  private devices: Device[] = [];
  private selected:Device;

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.getDevices()
    .subscribe(d => this.devices = d);
  }

  selectDevice(device: Device) : void {
    this.selected = device;
  }
}
