import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class FakeBackendService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const employees: Employee[] = [
      {
        _id: 1,
        firstName: 'John',
        lastName: 'Smith',
        designation: [
          {
            _id: 1,
            name: 'Senior UI Specialist',
            isSelected: false,
          },
        ],
        technologies: [
          {
            _id: 1,
            name: 'XD',
            isSelected: false,
          },
          {
            _id: 2,
            name: 'Sketch',
            isSelected: false,
          },
          {
            _id: 3,
            name: 'Photoshop',
            isSelected: false,
          },
        ],
        baseLocation: [
          {
            _id: 1,
            name: 'Mumbai',
            isSelected: false,
          },
        ],
        location: [
          {
            _id: 1,
            name: 'Mumbai',
            isSelected: false,
          },
          {
            _id: 2,
            name: 'Pune',
            isSelected: false,
          },
          {
            _id: 3,
            name: 'Indore',
            isSelected: false,
          },
          {
            _id: 4,
            name: 'Hyderabad',
            isSelected: false,
          },
        ],
        skills: [
          {
            _id: 1,
            name: 'UX Design',
            isSelected: false,
          },
          {
            _id: 2,
            name: 'UI Design',
            isSelected: false,
          },
          {
            _id: 3,
            name: 'Visual Design',
            isSelected: false,
          },
        ],
        relocation: false,
        experience: 8,
        message: 'I am intreseted in app development',
      },
      {
        _id: 2,
        firstName: 'Mark',
        lastName: 'Miler',
        designation: [
          {
            _id: 1,
            name: 'UX Lead',
            isSelected: false,
          },
        ],
        technologies: [
          {
            _id: 1,
            name: 'XD',
            isSelected: false,
          },
          {
            _id: 2,
            name: 'Sketch',
            isSelected: false,
          },
          {
            _id: 3,
            name: 'Photoshop',
            isSelected: false,
          },
        ],
        baseLocation: [
          {
            _id: 1,
            name: 'Mumbai',
            isSelected: false,
          },
        ],
        location: [
          {
            _id: 1,
            name: 'Mumbai',
            isSelected: false,
          },
          {
            _id: 2,
            name: 'Pune',
            isSelected: false,
          },
          {
            _id: 3,
            name: 'Indore',
            isSelected: false,
          },
          {
            _id: 4,
            name: 'Hyderabad',
            isSelected: false,
          },
        ],
        skills: [
          {
            _id: 1,
            name: 'UX Design',
            isSelected: false,
          },
          {
            _id: 2,
            name: 'UI Design',
            isSelected: false,
          },
          {
            _id: 3,
            name: 'Visual Design',
            isSelected: false,
          },
        ],
        relocation: false,
        experience: 8,
        message: 'I am intreseted in app development',
      },
    ];
    return { employees };
  }
}
