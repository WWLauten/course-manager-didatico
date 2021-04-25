import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CourseModule } from './courses/course.module';
import { Error404Component } from './error-404/error-404.component'
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
