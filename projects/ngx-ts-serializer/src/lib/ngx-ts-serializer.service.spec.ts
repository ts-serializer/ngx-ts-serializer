import { TestBed, inject } from '@angular/core/testing';
import { NgxTsSerializerService } from './ngx-ts-serializer.service';

describe('NgxTsSerializerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTsSerializerService]
    });
  });

  it('should be created', inject([NgxTsSerializerService], (service: NgxTsSerializerService) => {
    expect(service).toBeTruthy();
  }));
});
