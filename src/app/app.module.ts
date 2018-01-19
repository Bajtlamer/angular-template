import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { KomponentaComponent } from './komponenta/komponenta.component';

import { RouterModule, Routes } from '@angular/router';
import { AccentizePipe } from './accentize.pipe';

const routeList: Routes = [
  {
    path: "", component:KomponentaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    KomponentaComponent,
    AccentizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
