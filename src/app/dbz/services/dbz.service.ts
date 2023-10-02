import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid'

import { Character } from '../intrfaces/character.interface';

@Injectable({
  providedIn: 'root'})
export class DBZService {

  public characters: Character[]=[{
    id:uuid(),
    name:'Krillin',
    power:1000
  },{
    id:uuid(),
    name:'Goku',
    power:9000
  },{
    id:uuid(),
    name:'vegeta',
    power:9500
  }];

  addCharacter(character:Character):void{

    const newCharacter:Character={
      id:uuid(),...character
    };

    this.characters.push(newCharacter);
  }

  // onDeleteCharatcter(index:number){
    //this.characters.splice(index,1);
    deleteCaracterById(Id:string){
      this.characters=this.characters.filter(character => character.id!==Id);

  }


}
