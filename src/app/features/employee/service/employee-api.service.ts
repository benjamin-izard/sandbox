import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPLOYEE_API } from 'src/app/configs/endpoints.config';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  constructor(private httpClient: HttpClient) {}

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(
      `${environment.baseUrl}${EMPLOYEE_API.employeeList}`
    );
  }
}
