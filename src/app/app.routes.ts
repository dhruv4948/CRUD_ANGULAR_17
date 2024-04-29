import { Routes } from '@angular/router';
import path from 'path';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { EmployeeCreteComponent } from './Pages/employee-crete/employee-crete.component';
import { EmployeePageComponent } from './Pages/employee-page/employee-page.component';
import { EmployeeEditComponent } from './Pages/employee-edit/employee-edit.component';


export const routes: Routes = [

{path:'',component:HomePageComponent , title:'Home page'},
{path:'contact-us',component:ContactPageComponent, title:'Contact page'},
{path:'about-us',component:AboutPageComponent, title:'About page'},
{path:'Employee',component:EmployeePageComponent, title:'Employee List'},
{path:'Employee/create',component:EmployeeCreteComponent, title:'Employee Create'},
{path:'Employee/:id/Edit',component:EmployeeEditComponent, title:'Employee Edit'},

];  
