import {InjectionToken} from '@angular/core';
import {SerializerConfiguration} from 'ts-serializer-core';
import {DeserializerConfiguration} from 'ts-serializer-core/lib/deserializer/deserializer-configuration';

export const SERIALIZER_CONFIGURATION = new InjectionToken<SerializerConfiguration>('SERIALIZER_CONFIGURATION');
export const DESERIALIZER_CONFIGURATION = new InjectionToken<DeserializerConfiguration>('DESERIALIZER_CONFIGURATION');
