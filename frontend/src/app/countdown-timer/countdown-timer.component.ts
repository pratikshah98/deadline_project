import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, interval, switchMap, takeWhile, startWith, map } from 'rxjs';
@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  secondsLeft$!: Observable<number>;
  private subscription!: Subscription;
  private currentSecondsLeft: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.secondsLeft$ = this.http.get<{ secondsLeft: number }>('/api/deadline').pipe(
      switchMap(res => {
        this.currentSecondsLeft = res.secondsLeft;
        return interval(1000).pipe(
          startWith(0),
          map(i => this.currentSecondsLeft - i),
          takeWhile(val => val >= 0)
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
