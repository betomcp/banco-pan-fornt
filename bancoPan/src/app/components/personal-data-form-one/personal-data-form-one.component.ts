import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-data-form-one',
  templateUrl: './personal-data-form-one.component.html',
  styleUrls: ['./personal-data-form-one.component.scss']
})
export class PersonalDataFormOneComponent implements OnInit {

  public email: string = "";
  public cpf: string = "";
  public celphone: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
      console.log(this.router)
      console.log(this.router)
  }

  public saveEmail(): void{
    localStorage.setItem("email", this.email)
  }

  public saveCpf(): void{
    localStorage.setItem("cpf", this.cpf)
  }

  public saveCelphone(): void{
    localStorage.setItem("celphone", this.celphone)
  }
}
