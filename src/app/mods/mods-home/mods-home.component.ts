import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOopen = false;
  accItems = [
    {
      title: 'Why is the sky blue?',
      content: 'Just because it is not covered by clouds.',
    },
    {
      title: 'What does an orange tastes like?',
      content: 'A bit better than a green apple.',
    },
    {
      title: 'What color is that cat?',
      content: 'The cat is blue...',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOopen = !this.modalOopen;
  }
}
