import {NgModule, Optional} from '@angular/core';
import {NgxTsSerializerService} from './ngx-ts-serializer.service';
import {ConverterStrategy, Deserializer, Serializer, SerializerConfiguration} from 'ts-serializer-core';
import {SERIALIZER_CONFIGURATION, SERIALIZER_CONVERTER_STRATEGY} from './ngx-ts-serializer.di';
import {NgxTsDeserializerService} from './ngx-ts-deserializer.service';

export function serializerFactory(configuration: SerializerConfiguration = null, converterStrategy: ConverterStrategy[] = null) {
  return new NgxTsSerializerService(new Serializer(configuration, converterStrategy));
}

export function deserializerFactory(converterStrategy: ConverterStrategy[] = null) {
  return new NgxTsDeserializerService(new Deserializer(converterStrategy));
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
      deps: [[new Optional(), SERIALIZER_CONVERTER_STRATEGY]]
    }
  ]
})
export class NgxTsSerializerModule {
}
