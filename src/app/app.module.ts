import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageViewerModule } from "ngx-image-viewer";
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';
import {MatFormFieldModule} from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule, MatIconModule, MatNativeDateModule, MatSortModule, MatTableModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { NgxElectronModule } from 'ngx-electron';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import {MatChipInputEvent} from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    DashboardComponent,
    TodolistComponent,
    LoginmoduleComponent,
    
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
    MatToolbarModule,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxElectronModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule ,
    MatAutocompleteModule,
    MatChipsModule

      
    
     
  ],
  exports:[MatInputModule,MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
