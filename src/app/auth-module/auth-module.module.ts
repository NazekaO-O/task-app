import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { RegistrationPageComponent } from '../registration-page/registration-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';

@NgModule({
  declarations: [
    RegistrationPageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegistrationPageComponent,
    LoginPageComponent,
  ]
})
export class AuthModuleModule { }
