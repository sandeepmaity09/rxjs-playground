const rxjs = require('rxjs');
const operators = require('rxjs/operators');
const fs = require('fs');


// console.log('rxjs', rxjs);

let observable = operators.map(x => x * x)(rxjs.of(1, 2, 3));
let subscription = observable.subscribe((next)=>{
    console.log('next', next);
}, (error) => {
    console.log('error', error);
}, () => {
    console.log('observer complete');
});
// console.log('observable', observable);