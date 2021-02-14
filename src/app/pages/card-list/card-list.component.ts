import { Component, OnInit } from '@angular/core';
import Establishment from './../../interfaces/establishment'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  establishments = {}
  localEstablishments = {}
  list = new Array<Establishment>();
  constructor() {
  	

   }

  ngOnInit(): void {
    this.setupLocalEstablishments(); //Prepara os dados dos estabelecimentos que já estão armazenados no localStorage
  	this.fetchEstablishments(); //Busca os estabelecimentos da api
  }

  fetchEstablishments(): void{
    const myRequest = new Request('https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments');

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        let dictData = this.convertArrayToDict(data)
        this.establishments = {...dictData, ...this.localEstablishments}
        this.list = Object.values(this.establishments)
        localStorage.setItem('establishments', JSON.stringify(this.establishments))
      })
    .catch(console.error);
  }

  setupLocalEstablishments(): void{
    try{
      this.localEstablishments = JSON.parse(localStorage.getItem('establishments'));  

    }catch(e){
      this.localEstablishments = {}
    }
    
  }

  convertArrayToDict(data:Array<Establishment>): Object{
    let dict = {}
    data.map((item)=>{
      dict[item.id] = item
    })
    
    return dict
  }

}
