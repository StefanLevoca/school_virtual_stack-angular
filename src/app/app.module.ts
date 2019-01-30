import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassroomComponent } from './classroom/classroom.component';
//import { ComputerComponent } from './computer/computer.component';
//import { DeviceComponent } from './device/device.component';
//import { PermissionsComponent } from './permissions/permissions.component';
//import { ProjectorComponent } from './projector/projector.component';
//import { UserComponent } from './user/user.component';
import { ClassroomEditComponent } from './classroom-edit/classroom-edit.component';
//import { ComputerEditComponent } from './computer-edit/computer-edit.component';
//import { DeviceEditComponent } from './device-edit/device-edit.component';
//import { PermissionsEditComponent } from './permissions-edit/permissions-edit.component';
//import { ProjectorEditComponent } from './projector-edit/projector-edit.component';
//import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassroomComponent,
    //ComputerComponent,
    //  DeviceComponent,
    //  PermissionsComponent,
    //ProjectorComponent,
    //  UserComponent,
    ClassroomEditComponent,
    //ComputerEditComponent,
   // DeviceEditComponent,
   // PermissionsEditComponent,
    //ProjectorEditComponent,
   // UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
