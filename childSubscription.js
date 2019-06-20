const rxjs = require('rxjs');
const fs = require('fs');
const operators = require('rxjs/operators/');

const observable1 = rxjs.interval(200);
const observable2 = rxjs.interval(300);

const subscription = observable1.subscribe(x => console.log('first', x));
const childSubscription = observable2.subscribe(y => console.log('second', y));

subscription.add(childSubscription);

setTimeout(()=>{
    subscription.unsubscribe();
}, 2000);