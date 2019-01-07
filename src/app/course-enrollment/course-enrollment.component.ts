import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-enrollment',
  templateUrl: './course-enrollment.component.html',
  styleUrls: ['./course-enrollment.component.css']
})
export class CourseEnrollmentComponent implements OnInit {

  categories= [
    {id:1 , name:'Angular 4'},
    {id:2 , name:'React'},
    {id:3 , name:'PWA'}
  ]

  onBlur(coursename) {
    console.log(coursename);
  }
  constructor() { }

  ngOnInit() {
  }

}
