import {InjectionToken} from '@angular/core';
import {ConverterStrategy, SerializerConfiguration} from 'ts-serializer-core';

export const SERIALIZER_CONFIGURATION = new InjectionToken<SerializerConfiguration>('SERIALIZER_CONFIGURATION');
export const SERIALIZER_CONVERTER_STRATEGY = new InjectionToken<ConverterStrategy>('SERIALIZER_CONVERTER_STRATEGY');
