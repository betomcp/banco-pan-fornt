import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  toStringLevel(level: number): string{
    switch (level){
      case 1:
        return 'Prata 1'
      case 2:
        return 'Prata 2'
      case 3:
        return 'Prata 3'
      case 4:
        return 'Ouro 1'
      case 5:
        return 'Ouro 2'
      case 6:
        return 'Ouro 3'
      case 7:
        return 'Platina 1'
      case 8:
        return 'Platina 2'
      case 9:
        return 'Platina 3'
      case 10:
        return 'Diamante 1'
      case 11:
        return 'Diamante 2'
      case 12:
        return 'Diamante 3'
      case 13:
        return 'Mestre 1'
      case 14:
        return 'Mestre 2'
      case 15:
        return 'Mestre '
      default:
        return 'Prata 1'
    }
  }

  starsStyles(level: number): void{
    switch (level){
      case 1:

          break
        case 2:
         'Prata 2'
          break
        case 3:
         'Prata 3'
          break
        case 4:
         'Ouro 1'
          break
        case 5:
         'Ouro 2'
          break
        case 6:
         'Ouro 3'
          break
        case 7:
         'Platina 1'
          break
        case 8:
         'Platina 2'
          break
        case 9:
         'Platina 3'
          break
        case 10:
         'Diamante 1'
          break
        case 11:
         'Diamante 2'
          break
        case 12:
         'Diamante 3'
          break
        case 13:
         'Mestre 1'
          break
        case 14:
         'Mestre 2'
          break
        case 15:
         'Mestre '
          break
        default:
         'Prata 1'
        break
      }
  }
}
