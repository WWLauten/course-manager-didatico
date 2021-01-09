import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component ({
    templateUrl: './courses-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    course!: Course;

    constructor(private activedRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit(): void {
        //If you are absolutely sure that the paramMap.get DOES exist in your DOM, 
        //you can show TS your confidence with a ! operator.
        // Notice the "!" at the end of line
        this.course = this.courseService.retrieveById(+this.activedRoute.snapshot.paramMap.get('id')!);
    }

    save(): void {
        this.courseService.save(this.course);
    }

}