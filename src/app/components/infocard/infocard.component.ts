import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent implements OnInit {

  @Input() titulo:string;
  @Input() saldo:string;
  @Input() color:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
