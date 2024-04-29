import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeRes, EmployeeService } from '../../Service/employee.service';
import { CommonModule } from '@angular/common';
import { LoderComponent } from '../Partials/loder/loder.component';

@Component({
  selector: 'app-employee-page',
  standalone: true,
  imports: [RouterLink, CommonModule, LoderComponent],
  templateUrl: './employee-page.component.html',
  styleUrl: './employee-page.component.css',
})
export class EmployeePageComponent {
  constructor(private employeeService: EmployeeService) {}

  data: any[] = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getEmployeedata();
  }

  getEmployeedata() {
    this.isLoading = true;
    this.employeeService.getEmployee().subscribe((data: any) => {
      // console.log(data);
      this.data = data;
      this.isLoading = false;
    });
  }
  deleteEmployee(event: any, empID: Number) {
    if (confirm('Are you sure you want to delete this data ?')) {
      event.target.innerText = 'Deleting..';
      this.employeeService.deleteEmployee(empID).subscribe((res: any) => {
        this.getEmployeedata();
        alert(res.message);
      });
    }
  }
}
