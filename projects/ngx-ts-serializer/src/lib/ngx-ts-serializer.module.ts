import {NgModule} from '@angular/core';
import {NgxTsSerializerService} from './ngx-ts-serializer.service';
import {ConverterStrategy, Serializer, SerializerConfiguration} from 'ts-serializer-core';
import {SERIALIZER_CONFIGURATION, SERIALIZER_CONVERTER_STRATEGY} from './ngx-ts-serializer.di';

export function serializerFactory(configuration: SerializerConfiguration, converterStrategy: ConverterStrategy) {
  return new NgxTsSerializerService(new Serializer(configuration, [converterStrategy]));
}

@NgModule({
  providers: [
    {
      provide: NgxTsSerializerService,
      useFactory: serializerFactory,
      deps: [SERIALIZER_CONFIGURATION, SERIALIZER_CONVERTER_STRATEGY]
    }
  ]
})
export class NgxTsSerializerModule {
}
