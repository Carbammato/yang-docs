import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YangFuriganaModule } from '@project161/yang-furigana';
import { AppComponent } from './app.component';
import { YangFuriganaComponent } from './yang-furigana/yang-furigana.component';

@NgModule({
  declarations: [
	AppComponent,
	YangFuriganaComponent,
  ],
  imports: [
    BrowserModule, YangFuriganaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
