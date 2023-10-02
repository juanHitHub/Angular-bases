import { Component } from '@angular/core';
import { Character } from '../intrfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

constructor(private dbzService:DBZService){}

  get characters(): Character[] {
     return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
   this.dbzService.deleteCaracterById(id);
  }

  onNewCharacter(character:Character){
    this.dbzService.addCharacter(character);
  }
}
