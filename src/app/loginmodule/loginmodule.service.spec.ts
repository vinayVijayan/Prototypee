import { TestBed, inject } from '@angular/core/testing';

import { LoginmoduleService } from './loginmodule.service';

describe('LoginmoduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginmoduleService]
    });
  });

  it('should be created', inject([LoginmoduleService], (service: LoginmoduleService) => {
    expect(service).toBeTruthy();
  }));
});
