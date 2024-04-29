import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface EmployeeRes{
  id: number
  emp_name: string 
  emp_age: number
  emp_phone: number
  emp_email: string
  emp_salary: number
  emp_city: string
}


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  saveEmployee(inputData: any) {
    return this.http.post('http://localhost:8000/api/Employee', inputData);
  }

  getEmployee(){
    return this.http.get(`http://localhost:8000/api/Employee`);
  }
  
  getEmployeeById(empID:any){
    return this.http.get(`http://localhost:8000/api/Employee/${empID}`);
  }

  updateEmployee(inputData:any , empID:number){
    return this.http.put(`http://localhost:8000/api/Employee/${empID}`,inputData);
  }
  
  deleteEmployee(empID:any){
    return this.http.delete(`http://localhost:8000/api/Employee/${empID}`,empID);
  }
}
