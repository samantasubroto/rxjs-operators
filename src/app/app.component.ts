import { Component } from '@angular/core';
import { UserService } from 'src/service/userservice.service';
import { take, takeLast, map, tap, filter, switchMap, mergeMap, switchAll } from 'rxjs/operators';
import { Observable, of, from} from 'rxjs';
import { Comment, Comments } from 'src/model/common.model';
import { OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit {
  title = 'rxjs-operators';
  userData$ : Observable<Comment[]>;
  quickData$ = of(1);
  quickFlatData$ = of(of(1,2,3,from([4])));
  stringArrayObser$ = from([ 1,2,3,4]);

  getData(){
    return of('string','interger','boolean');
  }
  constructor(protected service: UserService) { } 

  ngOnInit() {
   // this.service.getComments().pipe(map(x => x.filter(y => y.id == 40))).subscribe(x => console.log(x))

   // this.quickData$.pipe(take(3),tap(((code : any) => console.log(code) ))).subscribe();

  // this.quickFlatData$.pipe(switchAll()).subscribe(value => console.log(value));
  
      this.quickData$.pipe(switchMap(date => this.getData())).subscribe(value => console.log(value));
  }
}

