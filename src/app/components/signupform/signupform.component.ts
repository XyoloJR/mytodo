import { Component, OnInit } from '@angular/core';
import { Civilite } from './../../models/civilite';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  
  /**
   * Tableau des civilités à afficher dans le formulaire
   */
   public civilites : Civilite[];


  constructor() { 
    this.civilites =  [ {id:0, libelle:"Mademoiselle"} , {id:1, libelle:"Madame"}, {id:2, libelle:"Monsieur"}];
  }

  ngOnInit() {
  }

}
