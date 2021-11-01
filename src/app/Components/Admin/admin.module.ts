import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const myRoutes: Routes = [
  { path: 'Admin-Panel', component: AdminPanelComponent },
  { path: 'Admin-Product', component: AdminPanelComponent },
  { path: 'Edit-Product/:id', component: EditProductComponent },

  { path: 'Insert-Product', component: InsertProductComponent },
  { path: 'All-Users', component: AllUsersComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'Admin-Panel', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AdminPanelComponent,
    InsertProductComponent,
    AllUsersComponent,
    DashboardComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(myRoutes),
  ],
  exports: [RouterModule],
})
export class AdminModule {}
