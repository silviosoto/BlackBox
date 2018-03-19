import { TestBed, inject } from '@angular/core/testing';

import { UsuarioCrudService } from './usuario-crud.service';

describe('UsuarioCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioCrudService]
    });
  });

  it('should be created', inject([UsuarioCrudService], (service: UsuarioCrudService) => {
    expect(service).toBeTruthy();
  }));
});
