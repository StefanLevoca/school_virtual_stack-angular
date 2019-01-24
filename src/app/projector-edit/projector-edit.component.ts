import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Projector } from '../projector';

declare var $: any;

@Component({
  selector: 'app-projector-edit',
  templateUrl: './projector-edit.component.html',
  styleUrls: ['./projector-edit.component.css']
})
export class ProjectorEditComponent implements OnChanges {
  @Input() private projector: Projector;
  @Input() private actionWithProjector: string;
  @Output() savedProjector = new EventEmitter<Projector>();
  constructor() { }

  ngOnChanges() {
  }

  get actualProjector(): string {
    return JSON.stringify(this.projector);
  }

  get title(): string {
    if (this.actionWithProjector == 'add') {
      return 'Pridávanie projektora';
    } else {
      return 'Editácia projektora';
    }
  }

  onSubmit() {
    this.savedProjector.emit(this.projector);
    $('#projectorEditModal').modal('hide');
  }
}