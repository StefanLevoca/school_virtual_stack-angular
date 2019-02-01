import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { User } from '../user';
import { UserComponent } from '../user/user.component';
import { Action } from 'rxjs/internal/scheduler/Action';


declare var $: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnChanges {
  @Input() editedUser: User;
  @Output() editedUserPipe = new EventEmitter<User>();
  @Input() action: string;
  constructor() { }

  ngOnChanges() {
  }

  get actualUser(): string {
    return JSON.stringify(this.editedUser);
  }

  get title(): string {
    if (this.action == 'add') {
      return 'Pridávanie používateľa';
    } else {
      return 'Editácia používateľa';
    }
  }

  onSubmit() {
    this.editedUserPipe.emit(this.editedUser);
    $('#userEditModal').modal('hide');
  }
}
