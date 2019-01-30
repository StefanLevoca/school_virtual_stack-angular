// import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
// import { User } from '../user';

// declare var $: any;

// @Component({
//   selector: 'app-user-edit',
//   templateUrl: './user-edit.component.html',
//   styleUrls: ['./user-edit.component.css']
// })
// export class UserEditComponent implements OnChanges {
//   @Input() private user: User;
//   @Input() private actionWithUser: string;
//   @Output() savedUser = new EventEmitter<User>();
//   constructor() { }

//   ngOnChanges() {
//   }

//   get actualUser(): string {
//     return JSON.stringify(this.user);
//   }

//   get title(): string {
//     if (this.actionWithUser == 'add') {
//       return 'Pridávanie používateľa';
//     } else {
//       return 'Editácia používateľa';
//     }
//   }

//   onSubmit() {
//     this.savedUser.emit(this.user);
//     $('#userEditModal').modal('hide');
//   }
// }