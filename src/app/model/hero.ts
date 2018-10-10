import {User} from './user';
import {DateConverter, JsonProperty} from 'ts-serializer-core';
import {Weapon} from './weapon';
import {Animal} from './animal';

export class Hero extends User {

  @JsonProperty({name: 'weapons'})
  public weapons: Weapon[];

  @JsonProperty({name: 'animal'})
  public animal: Animal;

  @JsonProperty('tags')
  public tags: string[];

  @JsonProperty({name: 'birthDay', customConverter: DateConverter})
  public birthDay: Date;

  @JsonProperty({name: 'fightDates', customConverter: DateConverter})
  public fightDates: Date[];

  private _myPrivateProperty: string;

  public getWeapons(): string {
    return 'my weapons';
  }

  public getDescription(): string {
    return this.id + ' : ' + this.firstName + ' - ' + this.lastName + ' / Animal : ' + this.animal.id + ' - ' + this.animal.name;
  }

  public get monGetter(): string {
    return 'monGetter';
  }

  public set monSetter(value: string) {
  }

  public getMyPrivateProperty(): string {
      return this._myPrivateProperty;
  }

  public setMyPrivateProperty(value: string): void {
    this._myPrivateProperty = value;
  }
}
