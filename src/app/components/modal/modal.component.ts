import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  picture: string = "http://lorempixel.com/300/200/";
  constructor() { }

  ngOnInit(): void {
  }

}
