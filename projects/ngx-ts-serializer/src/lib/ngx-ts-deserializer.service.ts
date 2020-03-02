import {Injectable} from '@angular/core';
import {Deserializer} from 'ts-serializer-core';

@Injectable()
export class NgxTsDeserializerService {

  public constructor(private deserializer: Deserializer) { }

  public deserialize(type: {new (): any}, object: any | any[]): any {
    return this.deserializer.deserialize(type, object);
  }
}
