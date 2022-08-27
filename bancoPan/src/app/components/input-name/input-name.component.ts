import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss']
})
export class InputNameComponent implements DoCheck, OnInit  {


  public name: string = "";

  public user: User = {
    name: "",
    email: "",
    cpf: "",
    celphone: "",
    rg: "",
    mothersName: "",
    monthlyIncome: 0
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log("onInit")
  }

  public saveData(): void {
    localStorage.setItem("name", this.name)
    this.user.name = this.name
  }

  public goToNext(): void{
    console.log(this.user)
    this.router.navigate(['/personaldata1', {userData: {user: this.user}}])
  }

  ngDoCheck(): void {
    // this.setLocalStorage();
  }

  // public saveData(): void {
  //   this.userObj = [
  //     {
  //       name: this.name,
  //       emai: "",
  //       cpf: "",
  //       celphone: "",
  //       rg: "",
  //       motherName: "",
  //       monthlyIncome: 0.00
  //     }
  //   ]

  //   this.setLocalStorage();
  // }

  // public setLocalStorage(): void{
  //   localStorage.setItem("user", JSON.stringify(this.userObj))
  //   console.log("passou aqui")
  // }


}
