import { Component } from '@angular/core';
import {Hero} from './model/hero';
import {Animal} from './model/animal';
import {Weapon} from './model/weapon';
import {NgxTsSerializerService} from '../../projects/ngx-ts-serializer/src/lib/ngx-ts-serializer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private hero: Hero;

  public constructor(serialize: NgxTsSerializerService) {
    this.hero = new Hero();
    this.hero.id = 1;
    this.hero.firstName = 'Thomas';
    this.hero.lastName = 'Nisole';
    this.hero.nickName = 'Tom';
    this.hero.animal = new Animal();
    this.hero.animal.id = 2;
    this.hero.animal.name = 'Patrick';
    this.hero.tags = ['tag1', 'tag2'];
    this.hero.birthDay = new Date('December 17, 1995 03:24:00');
    this.hero.fightDates = [new Date('December 18, 2000 03:24:00'), new Date('December 19, 2005 03:24:00')];

    const weapon1 = new Weapon();
    weapon1.id = 3;
    weapon1.name = 'Sword';

    const weapon2 = new Weapon();
    weapon2.id = 4;
    weapon2.name = 'shield';

    this.hero.weapons = [weapon1, weapon2];

    console.log(this.hero);
    console.log(serialize.serialize(this.hero));
  }
}
