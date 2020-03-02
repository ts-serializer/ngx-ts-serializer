import {NgModule, Optional} from '@angular/core';
import {NgxTsSerializerService} from './ngx-ts-serializer.service';
import {Deserializer, Serializer, SerializerConfiguration} from 'ts-serializer-core';
import {DESERIALIZER_CONFIGURATION, SERIALIZER_CONFIGURATION} from './ngx-ts-serializer.di';
import {NgxTsDeserializerService} from './ngx-ts-deserializer.service';
import {DeserializerConfiguration} from 'ts-serializer-core/lib/deserializer/deserializer-configuration';

export function serializerFactory(configuration: SerializerConfiguration = null) {
  return new NgxTsSerializerService(new Serializer(configuration));
}

export function deserializerFactory(configuration: DeserializerConfiguration = null) {
  return new NgxTsDeserializerService(new Deserializer(configuration));
}

@NgModule({
  providers: [
    {
      provide: NgxTsSerializerService,
      useFactory: serializerFactory,
      deps: [[new Optional(), SERIALIZER_CONFIGURATION]]
    },
    {
      provide: NgxTsDeserializerService,
      useFactory: deserializerFactory,
      deps: [[new Optional(), DESERIALIZER_CONFIGURATION]]
    }
  ]
})
export class NgxTsSerializerModule {
}
