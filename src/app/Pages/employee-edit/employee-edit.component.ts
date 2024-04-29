import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LoderComponent } from '../Partials/loder/loder.component';
import { error, timeStamp } from 'console';
import { EmployeeService } from '../../Service/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, LoderComponent],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css',
})
export class EmployeeEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private http: HttpClient
  ) {}
  emp!: any;
  empId!: any;

  emp_name!: string;
  emp_email!: string;
  emp_age!: string;
  emp_phone!: string;
  emp_city!: string;
  emp_salary!: string;

  isLoading: boolean = false;
  loadingTitle: string = 'Loading';
  errors: any = [];

  ngOnInit(): void {
    // this.empID = this.route.snapshot.paramMap.get('id');
    // this.employeeService.getEmployeeById(this.empID).subscribe((res: any) => {
    //   console.log(res);
    // });

    this.empId = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.employeeService.getEmployeeById(this.empId).subscribe(
      (data: any) => {
        this.emp = data;
        console.log(this.emp);
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error Fetching employee Details', error);
        this.isLoading = false;
      }
    );
  }

  updateEmployee() {
    var inputData = {
      emp_name: this.emp.emp_name,
      emp_email: this.emp.emp_email,
      emp_age: this.emp.emp_age,
      emp_city: this.emp.emp_city,
      emp_phone: this.emp.emp_phone,
      emp_salary: this.emp.emp_salary,
    };

    this.isLoading=true;

    this.employeeService.updateEmployee(inputData, this.empId).subscribe({
      next: (res:any) => {
        console.log(res);
        alert('Employee Data Updated Successfully')
        this.isLoading=false;
        
      },
      error:(err:any)=>{
        console.log(err);
        this.errors = err.error.errors
        this.isLoading=false;

      }
    });
  }
}
