import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignInComponent } from './account/sign-in/sign-in.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/home/components/header/header.component';
import { TabCollaboratorsComponent } from './layout/home/components/tab-collaborators/tab-collaborators.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { InitComponent } from './layout/init/init.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import {httpInterceptorProviders} from './interceptors';
import { DialogCollaboratorDialog } from './layout/home/components/dialog-collaborator/dialog-collaborator.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    AuthenticationComponent,
    InitComponent,
    HeaderComponent,
    TabCollaboratorsComponent,
    DialogCollaboratorDialog,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
