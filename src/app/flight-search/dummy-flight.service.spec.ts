/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DummyFlightService } from './dummy-flight.service';

describe('Service: DummyFlight', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummyFlightService]
    });
  });

  it('should ...', inject([DummyFlightService], (service: DummyFlightService) => {
    expect(service).toBeTruthy();
  }));
});
