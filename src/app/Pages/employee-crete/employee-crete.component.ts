import { CommonModule,  } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../Service/employee.service';
import { LoderComponent } from '../Partials/loder/loder.component';

@Component({
  selector: 'app-employee-crete',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule ,LoderComponent ],
  templateUrl: './employee-crete.component.html',
  styleUrl: './employee-crete.component.css',
})
export class EmployeeCreteComponent {
  constructor(private employeeService: EmployeeService) {}

  
  emp_name!: string;
  emp_email!: string;
  emp_age!: string;
  emp_phone!: string;
  emp_city!: string;
  emp_salary!: string;
  

  errors :any = [];

  isLoading:boolean = false;  
  loadingTitle : string = 'Loading' ;


  saveEmployee() {

    this.isLoading = true;
    this.loadingTitle = 'Saving';

    var inputData = {
      emp_name: this.emp_name,
      emp_email: this.emp_email,
      emp_age: this.emp_age,
      emp_city: this.emp_city,
      emp_phone: this.emp_phone,
      emp_salary: this.emp_salary,
    };
    this.employeeService.saveEmployee(inputData).subscribe({
      next: (res: any) => {
      // alert('Employees Details saved');
      
      this.emp_name= '';
      this.emp_email = '';
      this.emp_city = '';
      this.emp_age = '';
      this.emp_phone = '';
      this.emp_salary = '';
      
      this.isLoading=false;
      // console.log(res);you 
    },
      error: (err: any) => {
        this.errors = err.error.errors;
        this.isLoading=false;
        console.log(err.error.errors,'errors');

      },
    });
  }
}
