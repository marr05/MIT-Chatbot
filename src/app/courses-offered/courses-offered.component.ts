import { Component, OnInit } from '@angular/core';
 import {courses} from '../courses'
import {COURSES} from '../courses-offered';
@Component({
  selector: 'app-courses-offered',
  templateUrl: './courses-offered.component.html',
  styleUrls: ['./courses-offered.component.css']
})
export class CoursesOfferedComponent implements OnInit {
 /*course : courses = {
    id: 1,
      course_name: 'BTech',
        principal: 'XYZ'
  };*/
  courses = COURSES;

  constructor() { }

  ngOnInit(): void {
  }

}
