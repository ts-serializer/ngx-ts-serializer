import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxTsSerializerModule} from 'ngx-ts-serializer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTsSerializerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
