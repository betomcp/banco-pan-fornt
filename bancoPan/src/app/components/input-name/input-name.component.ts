import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss']
})
export class InputNameComponent implements DoCheck, OnInit  {


  public name: string = "";

  //public userObj: Array<User> = [];

  constructor() { }

  ngOnInit(): void {
    // console.log("onInit")
  }

  public saveData(): void {
    localStorage.setItem("name", this.name)
    console.log("passou")
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
