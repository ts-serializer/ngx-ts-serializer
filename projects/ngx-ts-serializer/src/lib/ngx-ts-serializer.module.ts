import {NgModule, Optional} from '@angular/core';
import {NgxTsSerializerService} from './ngx-ts-serializer.service';
import {ConverterStrategy, Deserializer, Serializer, SerializerConfiguration} from 'ts-serializer-core';
import {
  DESERIALIZER_CONFIGURATION,
  SERIALIZER_CONFIGURATION,
  SERIALIZER_CONVERTER_STRATEGY
} from './ngx-ts-serializer.di';
import {NgxTsDeserializerService} from './ngx-ts-deserializer.service';
import {DeserializerConfiguration} from 'ts-serializer-core/lib/deserializer/deserializer-configuration';

export function serializerFactory(configuration: SerializerConfiguration = null, converterStrategy: ConverterStrategy[] = null) {
  return new NgxTsSerializerService(new Serializer(configuration, converterStrategy));
}

export function deserializerFactory(configuration: DeserializerConfiguration = null, converterStrategy: ConverterStrategy[] = null) {
  return new NgxTsDeserializerService(new Deserializer(configuration, converterStrategy));
}

@NgModule({
  providers: [
    {
      provide: NgxTsSerializerService,
      useFactory: serializerFactory,
      deps: [[new Optional(), SERIALIZER_CONFIGURATION], [new Optional(), SERIALIZER_CONVERTER_STRATEGY]]
    },
    {
      provide: NgxTsDeserializerService,
      useFactory: deserializerFactory,
      deps: [[new Optional(), DESERIALIZER_CONFIGURATION], [new Optional(), SERIALIZER_CONVERTER_STRATEGY]]
    }
  ]
})
export class NgxTsSerializerModule {
}
