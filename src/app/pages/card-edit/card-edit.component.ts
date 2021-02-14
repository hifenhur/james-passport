import { Component, OnInit, Input } from '@angular/core';
import Establishment from './../../interfaces/establishment'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {
  @Input() establishment: Establishment;
  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit(): void {
  	this.defineEstablishment()
  }

  defineEstablishment = () =>{
  	let id = this.route.snapshot.paramMap.get('id')
  	let establishments = JSON.parse(localStorage.getItem('establishments'))
  	this.establishment = <Establishment> establishments[id];
  	
  }

}
