import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from 'src/app/configs/routes.config';
import { EmployeeComponent } from './component/employee.component';

const routes: Routes = [
  { path: RoutesConfig.routesNames.employee.all, component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EmployeeRoutingModule {}
