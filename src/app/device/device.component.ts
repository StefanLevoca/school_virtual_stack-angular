import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { RestClientService } from '../rest-client.service';
import { Observable } from 'rxjs';
import { Classroom } from '../classroom';
import { User } from '../user';
import { Projector } from '../projector';
declare var $: any;

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  private title: string = "Zoznam zariadení";
  private devices: Device[] = [];
  private selectedDevice: Device;
  private action = 'add';
  private editedDevice = new Device(-1, "", new User[""], new Classroom[""], "", -1, -1, "", "", new Date, "", "", "", "", new Date, "", "", -1, new Projector[""]);
  private status = 'ok';

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.getDevicesFromServer();
  }

  getDevicesFromServer() {
    let pipe: Observable<Device[]> = this.restService.getDevices();
    pipe.subscribe(devicesFromPipe => {
      this.devices = devicesFromPipe
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }

  selectDeviceClicked(device: Device) {
    this.selectedDevice = device;
  }

  editedDeviceSaved(device: Device) {
    if (this.action == 'add') {
      this.restService.addDevice(device).subscribe(ok => {
        this.getDevicesFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
    } else {
      this.restService.saveDevice(device).subscribe(ok => {
        this.getDevicesFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
    }
  }

  addDeviceButtonClicked() {
    this.action = 'add';
    this.editedDevice = new Device(-1, "", new User[""], new Classroom[""], "", -1, -1, "", "", new Date, "", "", "", "", new Date, "", "", -1, new Projector[""]);
  }

  editDeviceClicked(device: Device) {
    this.action = 'edit';
    this.editedDevice = JSON.parse(JSON.stringify(device));
    $('#deviceEditModal').modal('show');
  }

  deleteDeviceClicked(device: Device) {
    this.restService.deleteDevice(device).subscribe(ok => {
      this.getDevicesFromServer();
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }
}