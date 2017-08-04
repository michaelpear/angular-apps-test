import { TestBed, inject } from '@angular/core/testing';
import {HttpModule} from '@angular/http';

import { GridDataService } from './grid-data.service';


describe('GridDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GridDataService]
    });
  });

  it('should be created', inject([GridDataService], (service: GridDataService) => {
    expect(service).toBeTruthy();
  }));

  describe ('#getAllData()', () => {
    it('should have >500 data rows', inject([GridDataService], (service: GridDataService) => {
      service.getAllData().subscribe( data => expect(data.length).toBeGreaterThanOrEqual(500));
    }));
  });
});
