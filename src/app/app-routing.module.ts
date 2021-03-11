import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { PlacementComponent } from './placement/placement.component';
import { HomeComponent } from './home/home.component';
import { CoursesOfferedComponent } from './courses-offered/courses-offered.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {DepartmentComponent} from './department/department.component';
import {HostelComponent} from './hostel/hostel.component'
const routes: Routes = [
  { path: '',   redirectTo: 'about', pathMatch: 'full' },
{ path: "about", component: AboutComponent},
{ path: "placement", component: PlacementComponent},
{ path: "home", component: HomeComponent},
{ path: "courses", component: CoursesOfferedComponent},
{ path: 'achieve', component: AchievementsComponent},
{ path: 'department', component: DepartmentComponent},
{path : 'hostel', component: HostelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
