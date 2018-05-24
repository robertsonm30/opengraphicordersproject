import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';

const routes:Routes = [
  {
    path:'',
    component:UserComponent,
  },
  {
    path:'admin',
    component:AdminComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  declarations: []
})
export class AppRoutingModule { }
