import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


export class GameComponent implements OnInit {

  userLevel: number = 1;
  type: string = 'first'

  @HostBinding('isFirst') get isFirst(){
    return this.type === 'first'
  }

  style: any = {
    color: 'red'
  }

  constructor() { }

  ngOnInit(): void {
  }

  isSilver(): boolean{
    if(this.userLevel < 4)
      return true;
    return false;
  }

  isGold(): boolean{
    if(this.userLevel < 7 && this.userLevel > 3)
      return true;
    return false;
  }

  isPlatinum(): boolean{
    if(this.userLevel < 10 && this.userLevel > 6)
      return true;
    return false;
  }

  isDiamond(): boolean{
    if(this.userLevel < 13 && this.userLevel > 9)
      return true;
    return false;
  }

  isMaster(): boolean{
    if(this.userLevel < 16 && this.userLevel > 12)
      return true;
    return false;
  }


}
