import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YangFuriganaComponent } from './yang-furigana/yang-furigana.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
	AppComponent,
	YangFuriganaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
