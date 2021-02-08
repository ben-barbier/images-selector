import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ImagesSelectorModule} from '../../projects/images-selector/src/lib/images-selector.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImagesSelectorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
