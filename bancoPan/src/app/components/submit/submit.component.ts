import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  public user: User = {
    name: "",
    email: "",
    cpf: "",
    celphone: "",
    rg: "",
    mothersName: "",
    monthlyIncome: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  public submitUser(): void{
    this.user.name = localStorage.getItem("name") || "";
    this.user.email = localStorage.getItem("email") || "";
    this.user.cpf = localStorage.getItem("cpf") || "";
    this.user.celphone = localStorage.getItem("celphone") || "";
    this.user.rg = localStorage.getItem("rg") || "";
    this.user.mothersName = localStorage.getItem("mothersName") || "";
    this.user.monthlyIncome = parseInt(localStorage.getItem("monthlyIncome") || "0");

    console.log(this.user)
  }

}
