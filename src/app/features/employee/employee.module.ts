import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './component/employee.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [SharedModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
