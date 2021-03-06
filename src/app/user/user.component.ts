import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RestClientService } from '../rest-client.service';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: User[] = [];
  public action = 'add';
  private editedUser: User = new User("", "", "", "", "");
  private status = 'ok';

  constructor(private restService: RestClientService) { }

  get user(){
    return this.editedUser;
  }

  ngOnInit() {
    this.getUsersFromServer();
  }
  

  getUsersFromServer() {
    let pipe: Observable<User[]> = this.restService.getUsers();
    pipe.subscribe(usersFromPipe => {
      this.users = usersFromPipe
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }

  selectUserClicked(user: User) {
    this.editedUser = user;
  }

  editedUserSaved(user: User) {
    if (this.action == 'add') {
      this.restService.addUser(user).subscribe(ok => {
        this.getUsersFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
    
    } else {
      this.restService.saveUser(user).subscribe(ok => {
        this.getUsersFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
    }
  }
  addUserButtonClicked() {
    this.action = 'add';
    this.editedUser = new User("", "", "", "", "");
    $('#userEditModal').modal('show');
  }

  editUserClicked(user: User) {
    this.action = 'edit';
    this.editedUser = JSON.parse(JSON.stringify(user));
    $('#userEditModal').modal('show');
  }

  deleteUserClicked(user: User) {
    this.restService.deleteUser(user).subscribe(ok => {
      this.getUsersFromServer();
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }
}