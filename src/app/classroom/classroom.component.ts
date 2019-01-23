import { Component, OnInit } from '@angular/core';
import { Classroom } from '../classroom';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  private classrooms: Classroom[] = [];
  private selected: Classroom;

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.getClassrooms()
      .subscribe(c => this.classrooms = c);
  }

  selectClassroom(classroom: Classroom): void {
    this.selected = classroom;
  }
}
