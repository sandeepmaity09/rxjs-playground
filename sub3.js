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
