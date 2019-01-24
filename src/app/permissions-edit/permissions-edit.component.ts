import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Permissions } from '../permissions';

declare var $: any;

@Component({
  selector: 'app-permissions-edit',
  templateUrl: './permissions-edit.component.html',
  styleUrls: ['./permissions-edit.component.css']
})
export class PermissionsEditComponent implements OnChanges {
  @Input() private permission: Permissions;
  @Input() private actionWithPermission: string;
  @Output() savedPermission = new EventEmitter<Permissions>();
  constructor() { }

  ngOnChanges() {
  }

  get actualPermission(): string {
    return JSON.stringify(this.permission);
  }

  get title(): string {
    if (this.actionWithPermission == 'add') {
      return 'Pridávanie povolenia';
    } else {
      return 'Editácia povolenia';
    }
  }

  onSubmit() {
    this.savedPermission.emit(this.permission);
    $('#permissionEditModal').modal('hide');
  }
}