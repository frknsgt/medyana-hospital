import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSearchFilterModule } from 'ng-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {
  ClinicListComponent,
  EquipmentListComponent,
  AddClinicComponent,
  AddEquipmentComponent,
} from './pages';
import {
  ClientBannerComponent,
  ClientLayoutComponent,
  PaginationComponent,
  WarningWindowComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ClinicListComponent,
    EquipmentListComponent,
    ClientBannerComponent,
    ClientLayoutComponent,
    AddClinicComponent,
    AddEquipmentComponent,
    PaginationComponent,
    WarningWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgSearchFilterModule,
    MatMenuModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
