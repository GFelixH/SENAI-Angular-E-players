import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'homepage',
        component: HomepageComponent,
      },
      {
        path: 'homepage/login',
        component: LoginComponent,
      },
    ]),
  ],
})
export class PagesModule {}
