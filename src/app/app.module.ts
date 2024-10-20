import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

const routes : Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path:'customers/add',
    component: CustomerAddComponent
  },
  {
    path: 'customers/edit/:id',
    component: CustomerEditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
