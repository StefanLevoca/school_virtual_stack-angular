import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  private computers: Computer[] = [];
  private selected:Computer;

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.getComputers()
    .subscribe(c => this.computers = c);
  }

  selectComputer(computer: Computer) : void {
    this.selected = computer;
  }
}

