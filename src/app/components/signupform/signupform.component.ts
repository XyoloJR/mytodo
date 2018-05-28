import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  
  /**
   * Tableau des civilités à afficher dans le formulaire
   */
   public civilites : string[];


  constructor() { 
    this.civilites =  ["Mademoiselle", "Madame", "Monsieur"];
  }

  ngOnInit() {
  }

}
