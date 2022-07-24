import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { Error404Component } from './core/component/error404/error404.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, Error404Component],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: Error404Component,
      },
    ]),
    PagesModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
