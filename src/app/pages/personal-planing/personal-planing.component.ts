import { Component, OnInit } from '@angular/core';

interface filterItem {
  id: number;
  title: string;
}
@Component({
  selector: 'app-personal-planing',
  templateUrl: './personal-planing.component.html',
  styleUrls: ['./personal-planing.component.sass'],
})
export class PersonalPlaningComponent implements OnInit {
  addNewTask: boolean = true;

  filterItems: filterItem[] = [
    { id: 0, title: 'All' },
    { id: 1, title: 'Inactive' },
    { id: 2, title: 'Active' },
    { id: 3, title: 'On hold' },
    { id: 4, title: 'Completed' },
  ];

  currentFilterItem: number = 0;

  constructor() {}

  ngOnInit(): void {}
  closeAddNewTask(state: boolean) {
    this.addNewTask = state;
  }
}
