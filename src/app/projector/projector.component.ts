import { Component, OnInit } from '@angular/core';
import { Projector } from '../projector';
import { RestClientService } from '../rest-client.service';
import { Observable } from 'rxjs';
import { Device } from '../device';
declare var $: any;

@Component({
  selector: 'app-projector',
  templateUrl: './projector.component.html',
  styleUrls: ['./projector.component.css']
})
export class ProjectorComponent implements OnInit {

  private title: string = "Zoznam projektorov";
  private projectors: Projector[] = [];
  private selectedProjector: Projector;
  private action = 'add';
  private editedProjector = new Projector("", "", -1, "", -1);
  private status = 'ok';

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.getProjectorsFromServer();
  }

  getProjectorsFromServer() {
    let pipe: Observable<Projector[]> = this.restService.getProjectors();
    pipe.subscribe(projectorsFromPipe => {
      this.projectors = projectorsFromPipe
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }

  selectProjectorClicked(projector: Projector) {
    this.selectedProjector = projector;
  }

  editedProjectorSaved(projector: Projector) {
    if (this.action == 'add') {
      this.restService.addProjector(projector).subscribe(ok => {
        this.getProjectorsFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
    } else {
      this.restService.saveProjector(projector).subscribe(ok => {
        this.getProjectorsFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
    }
  }

  addProjectorButtonClicked() {
    this.action = 'add';
    this.editedProjector = new Projector("", "", -1, "", -1);
  }

  editProjectorClicked(projector: Projector) {
    this.action = 'edit';
    this.editedProjector = JSON.parse(JSON.stringify(projector));
    $('#projectorEditModal').modal('show');
  }

  deleteProjectorClicked(device: Device) {
    this.restService.deleteProjector(device).subscribe(ok => {
      this.getProjectorsFromServer();
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }
}