import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//importando modelos
import Establishment from '../../interfaces/establishment'
import Region from '../../interfaces/region'
import BooleanOption from '../../interfaces/boolean_option'
import Bank from '../../interfaces/bank'

//importando dados
import regionsJson from '../../data/regions.json';
import booleanOptionsJson from '../../data/boolean_options.json';
import banksJson from '../../data/banks.json';



@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']

})
export class CardFormComponent implements OnInit {
  @Input() establishment: Establishment;
  accountTypes = ["Conta corrente", "Conta poupança"]
  regions = new Array<Region>();
  booleanOptions = new Array<BooleanOption>();
  banks = new Array<Bank>();


  constructor(private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
  	this.setupRegions()
    this.setupBooleanoptions()
    this.setupBanks()
  }
  setupBanks(): void{
    this.banks = banksJson
  }
  setupRegions(): void{
    this.regions = regionsJson
  }
  setupBooleanoptions(): void{
    this.booleanOptions = booleanOptionsJson
  }

  onSubmit(): void{
  	let strData = localStorage.getItem('establishments')
  	let establishments = JSON.parse(strData)

  	establishments[this.establishment.id] = this.establishment

  	localStorage.setItem('establishments', JSON.stringify(establishments))

    this.router.navigate(['/']);
  }

}
