import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxTsSerializerModule} from '../../projects/ngx-ts-serializer/src/lib/ngx-ts-serializer.module';

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
