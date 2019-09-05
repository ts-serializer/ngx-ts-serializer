import {InjectionToken} from '@angular/core';
import {ConverterStrategy, SerializerConfiguration} from 'ts-serializer-core';
import {DeserializerConfiguration} from 'ts-serializer-core/lib/deserializer/deserializer-configuration';

export const SERIALIZER_CONFIGURATION = new InjectionToken<SerializerConfiguration>('SERIALIZER_CONFIGURATION');
export const DESERIALIZER_CONFIGURATION = new InjectionToken<DeserializerConfiguration>('DESERIALIZER_CONFIGURATION');
export const SERIALIZER_CONVERTER_STRATEGY = new InjectionToken<ConverterStrategy>('SERIALIZER_CONVERTER_STRATEGY');
