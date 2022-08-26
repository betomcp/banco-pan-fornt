import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data-form-one',
  templateUrl: './personal-data-form-one.component.html',
  styleUrls: ['./personal-data-form-one.component.scss']
})
export class PersonalDataFormOneComponent implements OnInit {

  public email: string = "";
  public cpf: string = "";
  public celphone: string = "";

  constructor() { }

  ngOnInit(): void {
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
