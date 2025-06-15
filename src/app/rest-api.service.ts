import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, mergeMap, Observable } from 'rxjs';

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

  getDataWithDetails(): Observable<any> {
    return this.http
      .get<{ id: string }[]>(`${apiUrl}list`)
      .pipe(
        mergeMap((items) => {
          const detailCalls = items.map(item =>
            this.http.get(`${apiUrl}details/${item.id}`)
          );
          return forkJoin(detailCalls);
        })
      );
  }
}
