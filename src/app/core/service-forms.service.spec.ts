import { TestBed } from '@angular/core/testing';

import { ServiceFormsService } from './service-forms.service';

describe('ServiceFormsService', () => {
  let service: ServiceFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
