import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
  <h2>{{ title }}</h2>
  <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
  </ul>
  <button [style.backgroundColor]="isActive ? '#11FE22' : '#1122f0' ">SAVE</button>
  <p>{{ 'Understanding the way AJAX and JSON manipulation work in JavaScript could make the difference between writing an elegant, easy to reason about application, and a crude hack. As far as my experience goes, only a small number of developers I’ve talked to in the past year or so, know how to write a vanilla XMLHttpRequest, from scratch. I do agree that it is important to get the job done in a timely manner and not reinvent the wheel, but using something without understanding it’s substance is something that I cannot come to terms with, for someone other than a junior developer.' | summary:10}}</p>
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title:String = 'list of courses';
  courses;
  isActive = !true;

  constructor(service: CoursesService) {
    this.courses= service.getCourses();
   }

  ngOnInit() {
  }

}
