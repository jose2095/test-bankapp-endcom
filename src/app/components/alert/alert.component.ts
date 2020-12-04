import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() datos:Object;
  @Output() cerrar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.cerrar.emit(false);
  }
}
