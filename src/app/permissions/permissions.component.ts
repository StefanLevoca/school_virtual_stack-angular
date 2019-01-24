import { Component, OnInit } from '@angular/core';
import { Permissions } from '../permissions';
import { RestClientService } from '../rest-client.service';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  private title: string = "Zoznam povolení";
  private perimssions: Permissions[] = [];
  private selectedPermission: Permissions;
  private action = 'add';
  private editedPermission = new Permissions(-1, false, false, false, false, false, false);
  private status = 'ok';

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.getPermissionsFromServer();
  }

  getPermissionsFromServer() {
    let pipe: Observable<Permissions[]> = this.restService.getPermissions();
    pipe.subscribe(permissionsFromPipe => {
      this.perimssions = permissionsFromPipe
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }

  selectPermissionClicked(permission: Permissions) {
    this.selectedPermission = permission;
  }

  editedPermissionSaved(permission: Permissions) {
    if (this.action == 'add') {
      this.restService.addPermission(permission).subscribe(ok => {
        this.getPermissionsFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
    } else {
      this.restService.savePermission(permission).subscribe(ok => {
        this.getPermissionsFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
    }
  }

  addPermissionButtonClicked() {
    this.action = 'add';
    this.editedPermission = new Permissions(-1, false, false, false, false, false, false);
  }

  editPermissionClicked(permission: Permissions) {
    this.action = 'edit';
    this.editedPermission = JSON.parse(JSON.stringify(permission));
    $('#permissionEditModal').modal('show');
  }

  deletePermissionClicked(permission: Permissions) {
    this.restService.deletePermission(permission).subscribe(ok => {
      this.getPermissionsFromServer();
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }
}