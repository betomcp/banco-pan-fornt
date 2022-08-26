import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {

  public title: string = 'Antes de começarmos...';
  
  constructor(public router: Router) { }

  // public teste():void {
  //   this.router.navigate(['/userdata1'], );
  // }

}
