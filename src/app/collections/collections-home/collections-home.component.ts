import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  
  data = [
    { name: 'Joe', age: 28, job: 'engineer', employed: true },
    { name: 'Jill', age: 26, job: 'engineer', employed: false },
    { name: 'Elyzee', age: 25, job: 'engrneer', employed: true },
  ];
  headers = [
    { key: 'name', label: 'Name of Employee' },
    { key: 'age', label: 'Age of Emply.' },
    { key: 'job', label: 'Role of empl.' },
    { key: 'employed', label: 'IsActive?' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
