import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  SERIALIZER_CONFIGURATION,
  SERIALIZER_CONVERTER_STRATEGY
} from '../../projects/ngx-ts-serializer/src/lib/ngx-ts-serializer.di';
import {InstantiateConverterStrategy, SerializerConfiguration} from 'ts-serializer-core';
import {NgxTsSerializerModule} from '../../projects/ngx-ts-serializer/src/lib/ngx-ts-serializer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTsSerializerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
