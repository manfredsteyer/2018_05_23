import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { DummyFlightService } from './dummy-flight.service';


@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private httpClient: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> { // .subscribe(...)

    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.httpClient.get<Flight[]>(url, {params, headers});

  }

}


@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService,
  deps: [HttpClient]
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}
