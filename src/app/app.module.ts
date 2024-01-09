import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from 'src/layout/footer/footer/footer.component';
import { TopNavComponent } from 'src/layout/top-nav/top-nav/top-nav.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopNavComponent,
    CustomersComponent    
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
