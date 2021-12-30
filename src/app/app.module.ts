import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header.component';
import { HeroComponent } from './home/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
