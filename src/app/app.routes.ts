import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent)
}, {
  path: 'courses',
  loadComponent: () => import('./courses/courses.component').then(m => m.CoursesComponent)
}, {
  path: 'courses/:id',
  loadComponent: () => import('./course-detail/course-detail.component').then(m => m.CourseDetailComponent)
}];
