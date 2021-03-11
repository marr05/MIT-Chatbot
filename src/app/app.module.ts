import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { AboutComponent } from './about/about.component';
import { PlacementComponent } from './placement/placement.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CoursesOfferedComponent } from './courses-offered/courses-offered.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { DepartmentComponent } from './department/department.component';
import { HostelComponent } from './hostel/hostel.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PlacementComponent,
    HomeComponent,
    CoursesOfferedComponent,
    AchievementsComponent,
    DepartmentComponent,
    HostelComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
