import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Civilite } from './../../models/civilite';
import { User } from '../../models/user';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  
  /**
   * Tableau des civilités à afficher dans le formulaire
   */
  public civilites: Civilite[];

  /**
   * Instance du modèle User
   */
  private user: User;

  /**
   * Instance pour le contrôlé du formulaire d'inscription
   */
  public formController: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.civilites =  [ 
      {id:0, libelle:"Mademoiselle"} , 
      {id:1, libelle:"Madame"}, 
      {id:2, libelle:"Monsieur"}
    ];
  }

  public get nom() {return this.formController.controls.nom;}
  public get email() {return this.formController.controls.email;}
  public get password() {return this.formController.controls.password;}
  public get confirmedPassword() {return this.formController.controls.confirmedPassword;}
  public get cgu() {return this.formController.controls.cgu;}

  

  /**
   * Méthode appelée immédiatement après le constructeur de la classe
   */
  ngOnInit() {
    this.formController = this.builder.group({
        nom: ['', Validators.required],
        prenom: [''],
        email: ['', [Validators.required, Validators.email]],
        civilite: [''],
        password: ['',Validators.required],
        confirmedPassword: ['', Validators.required],
        cgu: [false, Validators.requiredTrue]
      });
  }

}
