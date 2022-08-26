import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-and-back',
  templateUrl: './go-and-back.component.html',
  styleUrls: ['./go-and-back.component.scss']
})
export class GoAndBackComponent implements OnInit {

  @Input() backLink = "";
  @Input() goLink = "";

  public backIcon: string = "icons/back-svgrepo-com.svg"
  public url: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url)
  }

  public isFirstPage(): boolean{
    if(this.router.url == '/'){
      return true;
    }

    return false;
  }

}
