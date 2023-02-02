import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  AppRoutingModule,
  routingcomps,
} from './app-routing/app-routing.module';
import { CarsdataService } from './carsdata.service';
import { MatInputModule } from '@angular/material/input';
// import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    ScrollingModule,
    MatFormFieldModule,
  
        MatInputModule
  ],
  declarations: [AppComponent, HelloComponent, routingcomps],
  bootstrap: [AppComponent],
  providers: [CarsdataService],
})
export class AppModule {}
