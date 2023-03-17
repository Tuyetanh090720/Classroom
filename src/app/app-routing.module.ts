import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClassManagementComponent } from './components/class-management/class-management.component';
import { ListClassComponent } from './components/class-management/list-class/list-class.component';
import { ClassCreationComponent } from './components/class-management/class-creation/class-creation.component';
import { ClassEditionComponent } from './components/class-management/class-edition/class-edition.component';
import { ClassJoinComponent } from './components/class-management/class-join/class-join.component';
import { ClassDetailManagementComponent } from './components/class-detail-management/class-detail-management.component';
import { StreamComponent } from './components/class-detail-management/stream/stream.component';
import { GradesComponent } from './components/class-detail-management/grades/grades.component';
import { PeopleComponent } from './components/class-detail-management/people/people.component';
import { ClassworkComponent } from './components/class-detail-management/classwork/classwork.component';
import { AssignmentCreationComponent } from './components/assignment-creation/assignment-creation.component';
import { AsignmentEditionComponent } from './components/asignment-edition/asignment-edition.component';
import { ClassCommentComponent } from './components/class-detail-management/class-comment/class-comment.component';



const routes: Routes = [
  { path: '', redirectTo: '/class-list', pathMatch: 'full' },

  { path: 'class-list', component: ListClassComponent },
  { path: 'class-detail/:id', component: ClassDetailManagementComponent },
  { path: 'class-detail/people/:id', component: PeopleComponent },
  { path: 'class-detail/grades/:id', component: GradesComponent },
  { path: 'class-detail/classwork/:id', component: ClassworkComponent },
  { path: 'class-detail/classwork/:id/creation', component: AssignmentCreationComponent },
  { path: 'class-detail/classwork/:id/edition', component: AsignmentEditionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
