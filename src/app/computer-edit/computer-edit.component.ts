import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Computer } from '../computer';

declare var $: any;

@Component({
  selector: 'app-computer-edit',
  templateUrl: './computer-edit.component.html',
  styleUrls: ['./computer-edit.component.css']
})
export class ComputerEditComponent implements OnChanges {
  @Input() private computer: Computer;
  @Input() private actionWithComputer: string;
  @Output() savedComputer = new EventEmitter<Computer>();
  constructor() { }

  ngOnChanges() {
  }

  get actualComputer(): string {
    return JSON.stringify(this.computer);
  }

  get title(): string {
    if (this.actionWithComputer == 'add') {
      return 'Pridávanie počítača';
    } else {
      return 'Editácia počítača';
    }
  }

  onSubmit() {
    this.savedComputer.emit(this.computer);
    $('#computerEditModal').modal('hide');
  }
}