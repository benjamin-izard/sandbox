import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.interface';
import { EmployeeApiService } from '../service/employee-api.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employeeList$: Observable<Employee[]> =
    this.employeeApiService.getEmployeeList();

  constructor(private employeeApiService: EmployeeApiService) {}

  ngOnInit(): void {}
}
