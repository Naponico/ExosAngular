import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app-routing';
import { HeaderComponent } from './header/header.component';
import { MatSortModule } from '@angular/material/sort'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,NavbarComponent,appRoutingModule,HeaderComponent,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
