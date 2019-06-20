const rxjs = require('rxjs');
const fs = require('fs');
const operators = require('rxjs/operators/');

const observable = rxjs.interval(500);
const subscription = observable.subscribe(x => console.log(x));

setTimeout(()=>{
    subscription.unsubscribe();
}, 10000);