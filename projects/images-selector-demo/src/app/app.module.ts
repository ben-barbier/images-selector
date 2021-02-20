import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImagesSelectorModule } from 'images-selector';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ImagesSelectorModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
