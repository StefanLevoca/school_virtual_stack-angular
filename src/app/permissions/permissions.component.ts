import { Component, OnInit } from '@angular/core';
import { Permissions } from '../permissions';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  private permissions: Permissions[] = [];
  private selected:Permissions;

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.getPerimssions()
    .subscribe(p => this.permissions = p);
  }

  selectParticipant(permission: Permissions) : void {
    this.selected = permission;
  }
}
