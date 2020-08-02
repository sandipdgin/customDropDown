import { Details } from './../core/model/details';
import { AppService } from '../app.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../core/model/employee';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public employees: Observable<Employee[]>;
  public details: Details[];

  public technologyData: Details[];
  public skillsData: Details[];
  public locationData: Details[];
  public title: string[] = [
    'Name',
    'Designation',
    'Technologies',
    'Skill',
    'Availability',
    'Base Location',
    'Open Relocate',
    'Action',
  ];
  @ViewChild('content') content: ElementRef;
  public modalContent: any;

  constructor(private appservice: AppService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getAllEmployees();
    // console.log('load employee', this.employees);
  }

  getAllEmployees(): void {
    this.appservice.getEmployees().subscribe((data: Observable<Employee[]>) => {
      console.log('data = ', data);
      this.employees = data;
      console.log('this.employees$ = ', this.employees);
      // this.technologyData = data[0].technologies.map((tech) => tech.name);
      this.technologyData = data[0].technologies;
      this.skillsData = data[0].skills;
      this.locationData = data[0].location;
    });
  }

  openModal(index): void {
    this.modalContent = this.employees[index];
    this.modalService.open(this.content, { centered: true });
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }
}
