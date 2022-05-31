import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageViewerModule } from "ngx-image-viewer";
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule, MatNativeDateModule, MatSortModule, MatTableModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    DashboardComponent
  ],
  imports: [
    ImageViewerModule.forRoot(),
    RouterModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule  ,
    MatInputModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
    
     
  ],
  exports:[MatInputModule,MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
