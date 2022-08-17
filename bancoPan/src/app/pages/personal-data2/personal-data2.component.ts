import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data2',
  templateUrl: './personal-data2.component.html',
  styleUrls: ['./personal-data2.component.scss']
})
export class PersonalData2Component implements OnInit {


  public title: string = 'Agora, precisamos de mais alguns dados...';

  constructor() { }

  ngOnInit(): void {
  }

}
