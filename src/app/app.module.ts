import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddcontactpersonComponent } from './addcontactperson/addcontactperson.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MysqlService } from 'src/app/service/mysql.service';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule } from '@angular/material';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AddcustomerComponent,
    AddcontactpersonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    CommonModule, MatInputModule, MatTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],
  providers: [MysqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
