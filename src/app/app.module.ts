import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { RocketComponent } from './rocket/rocket.component';

let routes:Routes=[
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'**',redirectTo:'Login'}
]
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TeacherComponent,
    StudentComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    RocketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
