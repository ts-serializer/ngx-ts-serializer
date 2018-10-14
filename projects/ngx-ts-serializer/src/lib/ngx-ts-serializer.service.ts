import {Injectable} from '@angular/core';
import {Serializer} from 'ts-serializer-core';

@Injectable()
export class NgxTsSerializerService {

  public constructor(private serializer: Serializer) {
  }

  public serialize(object: any | any[]): any {
    return this.serializer.serialize(object);
  }
}
