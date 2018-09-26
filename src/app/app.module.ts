import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ScopeComponent } from './scope/scope.component';
import { HoistingComponent } from './hoisting/hoisting.component';

@NgModule({
  declarations: [
    AppComponent,
    ScopeComponent,
    HoistingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
