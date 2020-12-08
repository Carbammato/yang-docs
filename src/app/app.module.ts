import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YangFuriganaComponent } from './yang-furigana/yang-furigana.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
	AppComponent,
	YangFuriganaComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
