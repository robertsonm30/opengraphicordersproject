import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports:[
    NavbarComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
