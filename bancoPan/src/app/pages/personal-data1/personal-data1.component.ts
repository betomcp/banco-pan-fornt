import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data1',
  templateUrl: './personal-data1.component.html',
  styleUrls: ['./personal-data1.component.scss']
})
export class PersonalData1Component implements OnInit {


  public title: string = "Estamos quase lá..."

  constructor() { }

  ngOnInit(): void {
  }

}
