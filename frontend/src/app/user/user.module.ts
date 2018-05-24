import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../components/user/user.component';
import { UserService } from '../services/user.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserComponent
  ],
  providers:[UserService]
})
export class UserModule { }
