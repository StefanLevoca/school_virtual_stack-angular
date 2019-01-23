import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private users: User[] = [];
  private selected:User;

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.getUsers()
    .subscribe(u => this.users = u);
  }

  selectUser(user: User) : void {
    this.selected = user;
  }
}
