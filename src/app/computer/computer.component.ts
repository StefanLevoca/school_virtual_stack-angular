import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer';
import { RestClientService } from '../rest-client.service';
import { Observable } from 'rxjs';
import { Device } from '../device';
declare var $: any;

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  private title: string = "Zoznam počítačov";
  private computers: Computer[] = [];
  private selectedComputer: Computer;
  private action = 'add';
  private editedComputer = new Computer("", "", "", 0, "", 0, "", "");
  private status = 'ok';

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.getComputersFromServer();
  }

  getComputersFromServer() {
    let pipe: Observable<Computer[]> = this.restService.getComputers();
    pipe.subscribe(computersFromPipe => {
      this.computers = computersFromPipe
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }

  selectComputerClicked(computer: Computer) {
    this.selectedComputer = computer;
  }

  editedComputerSaved(computer: Computer) {
    if (this.action == 'add') {
      this.restService.addComputer(computer).subscribe(ok => {
        this.getComputersFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
    } else {
      this.restService.saveComputer(computer).subscribe(ok => {
        this.getComputersFromServer();
      },
        errorMsg => {
          this.status = 'error';
          console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
        });
    }
  }

  addComputerButtonClicked() {
    this.action = 'add';
    this.editedComputer = new Computer("", "", "", 0, "", 0, "", "");
  }

  editComputerClicked(computer: Computer) {
    this.action = 'edit';
    this.editedComputer = JSON.parse(JSON.stringify(computer));
    $('#computerEditModal').modal('show');
  }

  deleteComputerClicked(device: Device) {
    this.restService.deleteComputer(device).subscribe(ok => {
      this.getComputersFromServer();
    },
      errorMsg => {
        this.status = 'error';
        console.log("chyba komunikacie: " + JSON.stringify(errorMsg));
      });
  }
}