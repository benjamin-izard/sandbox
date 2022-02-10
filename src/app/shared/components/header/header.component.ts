import { Component, OnInit } from '@angular/core';
import { RoutesConfig } from 'src/app/configs/routes.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routesConfig = RoutesConfig;

  constructor() {}

  ngOnInit(): void {}
}
