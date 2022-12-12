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
 */