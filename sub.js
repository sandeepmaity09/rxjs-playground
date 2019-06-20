const rxjs = require('rxjs');
const operators = require('rxjs/operators');

/**
 * A Subject is like an Observable, but can multicast to many Observers.
 * Subject are like EventEmitters: they maintain a registry of many listeners.
 */

const subject = new rxjs.Subject();

subject.subscribe({
    next : (v) => console.log(`observerA Value : ${v}`),
    error : (e) => console.log(`observerA Error ${e}`),
    complete: () => console.log(`observerA complete`)
})

subject.subscribe({
    next : (v) => console.log(`observerB Value: ${v}`),
    error : (e) => console.log(`observerB Error ${e}`),
    complete: () => console.log(`observerB complete`)
})

subject.next(1);
subject.next(2);
subject.complete();