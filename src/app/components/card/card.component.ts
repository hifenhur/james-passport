import { Component, OnInit, Input } from '@angular/core';
import Establishment from './../../interfaces/establishment'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})



export class CardComponent implements OnInit {
  @Input() establishment: Establishment;
  

  constructor() { 

  }

  ngOnInit(): void {
  }

  

}
