import { Component, OnInit } from '@angular/core';
import { KomponentaService } from './komponenta.service';


@Component({
  selector: 'app-komponenta',
  templateUrl: './komponenta.component.html',
  styleUrls: ['./komponenta.component.css'],
  providers: [ KomponentaService ]
})
export class KomponentaComponent implements OnInit {

  mapa = {};
  heros:string[];
  btnState = false;
  inputHero = null;
  adding = false;

  changeHero(){
    //this.hero = this.inputHero;
    this.heros.push(this.inputHero);
    this.inputHero = null;
    this.adding = false;
  }

  addMore(){
    this.adding = !this.adding;
  }

  constructor(private ajax: KomponentaService) { 
    this.heros = this.ajax.heros
  }
  
  ngOnInit() { }

}
