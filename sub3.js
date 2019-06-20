const rxjs = require('rxjs');

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

// const observable1 = rxjs.from([1, 2, 3]);
// observable1.subscribe(subject);

/**
 * Subjects are the only way of making any Observable execution be shared to multiple Observers.
 */


const observable2 = rxjs.of(4, 5, 6);
observable2.subscribe(subject);

