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
  combineLatestAll
} from 'rxjs/operators';
import { Observable, of, from, delay, debounceTime, combineLatest  } from 'rxjs';
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
  quickData$ = of(1.5,2.9).pipe(delay(10000));
  quickFlatData$ = of(1, 2, 3, 4);
  stringArrayObser$ = from(['string', 'interger', 'boolean']).pipe(delay(3000));



  searchField = new FormControl();

  source = from([
    { name: 'Joe', age: 30 },
    { name: 'Sarah', age: 35 },
  ]);

  getData() {
    return from(['string', 'interger', 'boolean']);
  }
  constructor(protected service: UserService) {}

  ngOnInit() {
    // this.service.getComments().pipe(map(x => x.filter(y => y.id == 40))).subscribe(x => console.log(x))

    // this.quickData$.pipe(take(3),tap(((code : any) => console.log(code) ))).subscribe();

    // this.quickFlatData$.pipe(switchAll()).subscribe(value => console.log(value));

    combineLatest( this.stringArrayObser$, this.quickFlatData$, this.quickData$).subscribe(([one, two, three]) => {
       console.log(one+ " "+ two+" "+ three);
    })
  }
}
