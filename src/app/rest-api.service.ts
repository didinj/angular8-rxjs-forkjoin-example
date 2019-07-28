import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const apiUrl = 'http://localhost:1337/www.metaweather.com/api/location/';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const response1 = this.http.get(apiUrl + '44418/');
    const response2 = this.http.get(apiUrl + '2459115/');
    const response3 = this.http.get(apiUrl + '28743736/');
    const response4 = this.http.get(apiUrl + '1940345/');
    return forkJoin([response1, response2, response3, response4]);
  }
}
