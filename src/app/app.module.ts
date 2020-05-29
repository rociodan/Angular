import { FormsModule }   from '@angular/forms';

import { routing } from './app-routing.module';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, AuthComponent, HomeComponent],
  imports: [BrowserModule, routing,FormsModule, HttpClientModule, BrowserAnimationsModule,MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
