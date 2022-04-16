import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JanComponent } from './jan/jan.component';
import { FormsModule } from '@angular/forms';
import { FebComponent } from './feb/feb.component';
import { MarComponent } from './mar/mar.component';
import { AprComponent } from './apr/apr.component';
import { MayComponent } from './may/may.component';
import { JunComponent } from './jun/jun.component';
import { JulComponent } from './jul/jul.component';
import { AugComponent } from './aug/aug.component';
import { SeptComponent } from './sept/sept.component';
import { OctComponent } from './oct/oct.component';
import { NovComponent } from './nov/nov.component';
import { DecComponent } from './dec/dec.component';
@NgModule({
  declarations: [
    AppComponent,
    JanComponent,
    FebComponent,
    MarComponent,
    AprComponent,
    MayComponent,
    JunComponent,
    JulComponent,
    AugComponent,
    SeptComponent,
    OctComponent,
    NovComponent,
    DecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
