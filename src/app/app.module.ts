import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ValueComponent } from './value/value.component';
import { RegisterComponent } from './Register/Register.component';

@NgModule({
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      appRoutingModule,
      FormsModule
   ],
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      ValueComponent,
      RegisterComponent
   ],
   providers: [
      // provide
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
