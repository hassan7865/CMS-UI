import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatedComponent } from './SnackBars/created/created.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DeleteComponent } from './delete/delete.component';
import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [
    AppComponent,
    NotfoundPageComponent,
    CreatedComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
