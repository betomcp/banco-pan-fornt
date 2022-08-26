import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addres-form',
  templateUrl: './addres-form.component.html',
  styleUrls: ['./addres-form.component.scss']
})
export class AddresFormComponent implements OnInit {

  public contryes: Array<string> = ['BR', 'EUA', 'ARG'];
  public ufList: Array<string> = ['SP', 'PR', 'RJ'];

  constructor() { }

  ngOnInit(): void {
  }

}
