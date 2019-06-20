/* Multicasted Observables */

/**
 * A "multicasted observable" passes notifications through a Subject which may have many Subscribers,
 * Whereas a plain "unicast observable" only send notification to a single Observer.
 */

const rxjs = require('rxjs');
const operators = require('rxjs/operators');

const source = rxjs.from([1, 2, 3]);
const subject = new rxjs.Subject();
const multicasted = source.pipe(operators.multicast(subject));

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
    next: (v) => console.log(`observerA : ${v}`)
})

multicasted.subscribe({
    next: (v) => console.log(`observerB : ${v}`)
})

multicasted.connect();