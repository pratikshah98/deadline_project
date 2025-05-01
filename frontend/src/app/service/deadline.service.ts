import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; // Import here
import { Observable,interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, startWith, map, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {
  private apiUrl = environment.apiUrl;  // Use the variable

  constructor(private http: HttpClient) { }

  getDeadlineCountdown(): Observable<number> {
    return this.http.get<{ secondsLeft: number }>(`${this.apiUrl}/deadline`).pipe(
      switchMap(res => {
        const start = res.secondsLeft;
        return interval(1000).pipe(
          startWith(0),
          map(i => start - i),
          takeWhile(val => val >= 0)
        );
      })
    );
  }
}
