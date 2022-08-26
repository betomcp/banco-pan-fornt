import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data-form-two',
  templateUrl: './personal-data-form-two.component.html',
  styleUrls: ['./personal-data-form-two.component.scss']
})
export class PersonalDataFormTwoComponent implements OnInit {

  public rg: string = "";
  public mothersName: string = "";
  public monthlyIncome: number = parseInt("");

  constructor() { }

  ngOnInit(): void {
  }

  public setRg(): void{
    localStorage.setItem("rg", this.rg);
  }

  public setMothersName(): void{
    localStorage.setItem("mothersName", this.mothersName);
  }

  public setMonthlyIncome(): void{
    localStorage.setItem("monthlyIncome", this.monthlyIncome.toString());
  }

}
