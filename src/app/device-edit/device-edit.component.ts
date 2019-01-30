// import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
// import { Device } from '../device';

// declare var $: any;

// @Component({
//   selector: 'app-device-edit',
//   templateUrl: './device-edit.component.html',
//   styleUrls: ['./device-edit.component.css']
// })
// export class DeviceEditComponent implements OnChanges {
//   @Input() private device: Device;
//   @Input() private actionWithDevice: string;
//   @Output() savedDevice = new EventEmitter<Device>();
//   constructor() { }

//   ngOnChanges() {
//   }

//   get actualDevice(): string {
//     return JSON.stringify(this.device);
//   }

//   get title(): string {
//     if (this.actionWithDevice == 'add') {
//       return 'Pridávanie zariadenia';
//     } else {
//       return 'Editácia zariadenia';
//     }
//   }

//   onSubmit() {
//     this.savedDevice.emit(this.device);
//     $('#deviceEditModal').modal('hide');
//   }
// }
