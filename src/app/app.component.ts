import { Component } from '@angular/core';
import { UserService } from 'src/service/userservice.service';
import {
  take,
  takeLast,
  map,
  tap,
  filter,
  switchMap,
  mergeMap,
  switchAll,
  mergeAll,
  concatMap,
  combineLatestAll,
} from 'rxjs/operators';
import {
  Observable,
  of,
  from,
  delay,
  debounceTime,
  combineLatest,
  withLatestFrom,
  interval
} from 'rxjs';
import { Comment, Comments } from 'src/model/common.model';
import { OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rxjs-operators';
  userData$: Observable<Comment[]>;
  quickData$ = of();
  stringArrayObser$ = from(['string', 'interger', 'boolean']).pipe(delay(2000));
  quickFlatData$ = of(1, 2, 3, 4);

  searchField = new FormControl();

  source = from([
    { name: 'Joe', age: 30 },
    { name: 'Sarah', age: 35 },
  ]);

  // getData() {
  //   setInterval(() => {
  //     for (let i = 0; i <= 10; i++) return of(i);
  //   }, 3000);
  // }
  constructor(protected service: UserService) {}

  source$ = interval(1000);

  ngOnInit() {
    // this.service.getComments().pipe(map(x => x.filter(y => y.id == 40))).subscribe(x => console.log(x))
    // this.quickData$.pipe(take(3),tap(((code : any) => console.log(code) ))).subscribe();
    // this.quickFlatData$.pipe(switchAll()).subscribe(value => console.log(value));

   // this.source$.pipe(withLatestFrom(interval(5000))).subscribe(data => console.log(data));
  }
}
