/**
 *
 *  Some Important Points
 *
 *  take(1) --> take operator with consider one gaint array as single input so if writing take(5) for a single huge array it will not working as expected
 *                                   better to use map in this case. like map(x => x.slice(0, 5));
 * 
 *   map() --> map is a tranformation keyword, not filteration.
 *   filter with map() --> this.service.getComments().pipe(map(x => x.filter(y => y.id == 40))).subscribe(x => console.log(x))
 * 
 *   FLATTENING:-
 * 
 *      when observable return an observable in reponse we need to subscribe it twice somethign like this.
 *        this.responseFromHttps.subscribe((data) => {
 *           data.subscribe((responseData) => {
 *             console.log(responseData) // here will be the actual data.
 *          })       
 *        })
 *     
 *    so to avoid this type of scenario we use some flattening operators offered by Rxjs such as..
 * 
 *      There are 4 “Flattening Strategies”
 *      “Merge” Strategy — deciding not to do anything, basically, we just keep subscribing to every new observable that we return from the map.
 *     “Switch” Strategy — unsubscribing from the last mapped observable, when the new one arrives.
 *      “Concat” Strategy —Queuing up every new Observable, and subscribing to a new observable only when the last observable completed.
 *     “Exhaust” strategy — the “don’t interrupt me” strategy, ignores (and never subscribe to) any new mapped Observable while the current Observable is still emitting values.
 * 
 *    in-short: combines the inner obersvable with outer observable and gives the final result as both.
 * 
 *   <!------Important
 * 
 *       MergeMap :- Used when we need all the data irrespective of order just we need all the data.
 *       ConcatMap:- Order matters here it fetch all the data but in order.
 *       SwitchMap:- emmits or shows only the last data emmited.
 * 
 *####### Switch:- 
 *        switchAll():- will flattern two level of oberservable but not this. quickFlatData$ = of(of(1,2,3,from([4])));
 * 
 *    map, switchAll(), switchMap
 *   this.quickData$.pipe(map(date => this.getData())).subscribe(value => console.log(value)); // observable....
 *   this.quickData$.pipe(map(date => this.getData()),SwitchMap()).subscribe(value => console.log(value)); // actual data
 *   this.quickData$.pipe(switchMap(date => this.getData())).subscribe(value => console.log(value)); //actual data mostly the last value remember
 *                                          google search example only the latest search is revlant at any time.
 * 
 * 
 *
 * ####### Merge:-    
 *   
 *         Syntax wise its same as SwitchMap.
 * 
 * ####### Concat:- 
 *          
 *          same as mergeMap
 * 
 * 
 *    Why use combineLatest?
 *     This operator is best used when you have multiple, long-lived observables that rely on each other for some calculation or determination. 
 *    Basic examples of this can be seen in example three, where events from multiple buttons are being combined to produce a count of each and an overall total,
 *      or a calculation of BMI from the RxJS documentation.
 *    
 *     Be aware that combineLatest will not emit an initial value until each observable emits at least one value. 
 *    This is the same behavior as withLatestFrom and can be a gotcha as there will be no output and no error but one (or more) of your inner observables is likely not functioning as intended, 
 *    or a subscription is late.
 * 
 *    syntax: 
 *     quickFlatData$ = of(1, 2, 3, 4).pipe(delay(3000));
       stringArrayObser$ = from(['string', 'interger', 'boolean']).pipe(delay(3000));
 
 *     combineLatest( this.stringArrayObser$, this.quickFlatData$).subscribe(([one, two]) => {
         console.log(one+ " "+ two);
       });
       Output: 
       boolean 1
       boolean 2
       boolean 3
       boolean 4

        quickData$ = of(1.5,2.9).pipe(delay(10000));
        quickFlatData$ = of(1, 2, 3, 4);
        stringArrayObser$ = from(['string', 'interger', 'boolean']).pipe(delay(3000));

        output: 
        boolean 4 1.5
        boolean 4 2.9

       combineLatest( this.stringArrayObser$, this.quickFlatData$, this.quickData$).subscribe(([one, two, three]) => {
           console.log(one+ " "+ two+" "+ three);
       });

       It will wait for every obersvable to emit atleast one data the moment he gets that one data he starts processing it.
 *        
       IMP: from first obs it will take latest value and merge it will all the other value of last obs(depending on delay time)
           -- who ever comes first it will pick the last value of it i.e latest value

 */


//withLatestFrom

/***
 * 
 *    parent and child concept,
 *       --starts only when both emits the first value
 *       --and than wait for parent to emit the next value to print it, child emitting multiple value doesn't impact, only parent have to emit value to print it.
 * 
 *    syntax
 * 
 *   this.source$.pipe(withLatestFrom(interval(5000))).subscribe(data => console.log(data));
 * 
 */


/**
 * 
 *          ForkJoin
 * 
 *   --> passing multiple observable as input and it will wait untill last element emitted from each observable is complete than it will 
 *   --> only the last element of each obs.
 *    forkJoin(
      {
        google: this.quickData$,
        microsoft: this.stringArrayObser$,
        users: this.quickFlatData$

      }
     ).subscribe(data => console.log(data));
  }
 * 
 * 
 */