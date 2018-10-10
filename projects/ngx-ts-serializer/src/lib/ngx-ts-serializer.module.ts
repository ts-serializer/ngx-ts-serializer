import {NgModule} from '@angular/core';
import {NgxTsSerializerService} from './ngx-ts-serializer.service';
import {ConverterStrategy, Deserializer, Serializer, SerializerConfiguration} from 'ts-serializer-core';
import {SERIALIZER_CONFIGURATION, SERIALIZER_CONVERTER_STRATEGY} from './ngx-ts-serializer.di';
import {NgxTsDeserializerService} from './ngx-ts-deserializer.service';

export function serializerFactory(configuration: SerializerConfiguration, converterStrategy: ConverterStrategy) {
  return new NgxTsSerializerService(new Serializer(configuration, [converterStrategy]));
}

export function deserializerFactory(converterStrategy: ConverterStrategy) {
  return new NgxTsDeserializerService(new Deserializer([converterStrategy]));
}

@NgModule({
  providers: [
    {
      provide: NgxTsSerializerService,
      useFactory: serializerFactory,
      deps: [SERIALIZER_CONFIGURATION, SERIALIZER_CONVERTER_STRATEGY]
    },
    {
      provide: NgxTsSerializerService,
      useFactory: serializerFactory,
      deps: [SERIALIZER_CONVERTER_STRATEGY]
    }
  ]
})
export class NgxTsSerializerModule {
}
