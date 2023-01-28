import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {
  AppRoutingModule,
  routingcomps,
} from './app-routing/app-routing.module';
import { CarsdataService } from './carsdata.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, HelloComponent, routingcomps],
  bootstrap: [AppComponent],
  providers: [CarsdataService],
})
export class AppModule {}
