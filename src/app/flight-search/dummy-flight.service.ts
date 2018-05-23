import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import { Observable, of as observableOf } from 'rxjs';
import { Flight } from '../entities/flight';

@Injectable()
export class DummyFlightService implements FlightService {

  constructor() { }

  find(from: string, to: string): Observable<Flight[]> {
    return observableOf(
      [
        {id: 17, from: 'Graz', to: 'Hamburg', date: '2018-12-24T17:00' },
        {id: 18, from: 'Graz', to: 'Hamburg', date: '2018-12-24T18:00' }
      ]
    );
  }

  

}
