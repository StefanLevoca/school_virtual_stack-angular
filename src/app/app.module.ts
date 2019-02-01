import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ComputerComponent } from './computer/computer.component';
import { ProjectorComponent } from './projector/projector.component';
import { UserComponent } from './user/user.component';
import { ClassroomEditComponent } from './classroom-edit/classroom-edit.component';
import { ComputerEditComponent } from './computer-edit/computer-edit.component';
import { ProjectorEditComponent } from './projector-edit/projector-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassroomComponent,
    ComputerComponent,
    ProjectorComponent,
    UserComponent,
    ClassroomEditComponent,
    ComputerEditComponent,
    ProjectorEditComponent,
    UserEditComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
