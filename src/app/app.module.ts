import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';
import {DataService} from './components/data.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
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
import {MatDialog,MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClassCommentComponent } from './components/class-detail-management/class-comment/class-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListClassComponent,
    ClassCreationComponent,
    ClassEditionComponent,
    ClassJoinComponent,
    GradesComponent,
    StreamComponent,
    PeopleComponent,
    ClassworkComponent,
    AssignmentCreationComponent,
    AsignmentEditionComponent,
    LoginComponent,
    ClassManagementComponent,
    ClassDetailManagementComponent,
    ClassCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    FormsModule,
    EditorModule,
    NgbModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
  ],
  providers: [DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
