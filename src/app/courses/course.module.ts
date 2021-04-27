import { AppPipeModule } from '../shared/pipe/app-pipe.module';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './courses-info.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarModule } from '../shared/component/star/star.module';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ], 
    imports: [
        AppPipeModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },      
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ]),
        StarModule
    ]
})
export class CourseModule {

}