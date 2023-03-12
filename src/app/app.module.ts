import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListClassComponent } from './components/list-class/list-class.component';
import { ClassCreationComponent } from './components/class-creation/class-creation.component';
import { ClassEditionComponent } from './components/class-edition/class-edition.component';
import { ClassJoinComponent } from './components/class-join/class-join.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListClassComponent,
    ClassCreationComponent,
    ClassEditionComponent,
    ClassJoinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
