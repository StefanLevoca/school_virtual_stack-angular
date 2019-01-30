import { Component, OnInit } from '@angular/core';
import { Classroom } from '../classroom';
import { RestClientService } from '../rest-client.service';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  private title: string = "Zoznam tried";
  private classroom: Classroom[] = [];
  private selectedClassroom: Classroom;
  private action = 'add';
  private editedClassroom = new Classroom("");
  private status = 'ok';

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.getClassroomsFromServer();
  }

  getClassroomsFromServer() {
    let pipe: Observable<Classroom[]> = this.restService.getClassrooms();
    pipe.subscribe(classroomsFromPipe => {
      this.classroom = classroomsFromPipe
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }

  selectClassroomClicked(classroom: Classroom) {
    this.selectedClassroom = classroom;
  }

  editedClassroomSaved(classroom: Classroom) {
    if (this.action == 'add') {
      this.restService.addClassroom(classroom).subscribe(ok => {
        this.getClassroomsFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
      // } else {
      //   this.restService.saveClassroom(classroom).subscribe(ok => {
      //     this.getClassroomsFromServer();
      //   },
      //     errorMsg => {
      //       this.status = 'error';
      //       console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      //     });
    }
  }

  addClassroomButtonClicked() {
    this.action = 'add';
    this.editedClassroom = new Classroom("");
  }

  editClassroomClicked(classroom: Classroom) {
    this.action = 'edit';
    this.editedClassroom = JSON.parse(JSON.stringify(classroom));
    $('#classroomEditModal').modal('show');
  }

  deleteClassroomClicked(classroom: Classroom) {
    this.restService.deleteClassroom(classroom).subscribe(ok => {
      this.getClassroomsFromServer();
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }
}