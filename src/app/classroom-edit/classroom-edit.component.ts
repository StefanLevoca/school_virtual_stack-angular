import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Classroom } from '../classroom';

declare var $: any;

@Component({
  selector: 'app-classroom-edit',
  templateUrl: './classroom-edit.component.html',
  styleUrls: ['./classroom-edit.component.css']
})
export class ClassroomEditComponent implements OnChanges {
  @Input() private classroom: Classroom;
  @Input() private actionWithClassroom: string;
  @Output() savedClassroom = new EventEmitter<Classroom>();
  constructor() { }

  ngOnChanges() {
  }

  get actualClassroom() {
    return this.classroom;
  }

  get title(): string {
    if (this.actionWithClassroom == 'add') {
      return 'Pridávanie triedy';
    // } else {
    //   return 'Editácia triedy';
    }
  }

  onSubmit() {
    this.savedClassroom.emit(this.classroom);
    $('#classroomEditModal').modal('hide');
  }
}
