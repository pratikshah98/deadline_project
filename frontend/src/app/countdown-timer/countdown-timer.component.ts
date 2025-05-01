import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, interval, switchMap, takeWhile, startWith, map } from 'rxjs';
import { DeadlineService } from '../service/deadline.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  secondsLeft$!: Observable<number>;
  private subscription!: Subscription;
  private currentSecondsLeft: number = 0;

  constructor(private http: HttpClient,private deadlineService: DeadlineService) { }

  ngOnInit(): void {
    this.secondsLeft$ = this.deadlineService.getDeadlineCountdown();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
