import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  public from: string;
  public to: string;
  public flights: Array<Flight> = [];
  public selectedFlight: Flight;

  // private httpClient: HttpClient;

  constructor(private flightService: FlightService) {
    // this.httpClient = httpClient;
  }

  ngOnInit() {
  }

  search(): void {

    this.flightService.find(this.from, this.to)
        .subscribe(
          flights => { 
            this.flights = flights;
          },
          err => { 
            console.error('Error loading flights', err); 
          }
        );

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
