import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  public title: string = "Informe o seu endereço completo!"

  constructor() { }

  ngOnInit(): void {
  }

}
