import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ProjectorComponent } from './projector/projector.component';
import { ComputerComponent } from './computer/computer.component';

const routes: Routes = [
  {path:'', redirectTo: '/user', pathMatch:'full'},
  {path:'user', component: UserComponent},
  {path:'classroom', component: ClassroomComponent},
  {path:'projector', component: ProjectorComponent},
  {path:'computer', component: ComputerComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
