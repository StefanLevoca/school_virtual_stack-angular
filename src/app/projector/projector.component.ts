import { Component, OnInit } from '@angular/core';
import { Projector } from '../projector';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-projector',
  templateUrl: './projector.component.html',
  styleUrls: ['./projector.component.css']
})
export class ProjectorComponent implements OnInit {
  private projectors: Projector[] = [];
  private selected:Projector;

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.getProjectors()
    .subscribe(p => this.projectors = p);
  }

  selectParticipant(projector: Projector) : void {
    this.selected = projector;
  }
}
