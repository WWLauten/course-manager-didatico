import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component ({
    templateUrl: './courses-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    courseId: number = 0;

    constructor(private activedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        //If you are absolutely sure that the paramMap.get DOES exist in your DOM, 
        //you can show TS your confidence with a ! operator.
        // Notice the "!" at the end of line
        this.courseId = +this.activedRoute.snapshot.paramMap.get('id')!;
    }

}