import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './account/accounts/accounts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { ScrollTopService } from './scroll-top.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxScrollTopModule
  ],
  providers: [ScrollTopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
