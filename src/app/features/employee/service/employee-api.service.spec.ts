import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmployeeApiService } from './employee-api.service';

xdescribe('EmployeeApiService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: EmployeeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeeApiService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(EmployeeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of Employee', () => {});
});
