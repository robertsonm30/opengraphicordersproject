import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../components/admin/admin.component';
import { AdminService } from '../services/admin.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AdminComponent
  ],
  providers:[
    AdminService
  ]
})
export class AdminModule { }
