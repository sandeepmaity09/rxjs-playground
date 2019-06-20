const rxjs = require('rxjs');
const fs = require('fs');
const operators = require('rxjs/operators');

const subject = new rxjs.Subject();

fs.readFile(__filename, (err, done) => {
    if (err) {
        subject.error(err);
    }
    subject.next(done);
});
console.log("count 1");

setTimeout(() => {
    fs.readFile(__filename, (err, done) => {
        if (err) {
            subject.error(err);
        }
        subject.next(done);
    });
    console.log("count 2");
}, 1000);

setTimeout(() => {
    fs.readFile(__filename, (err, done) => {
        if (err) {
            subject.error(err);
        }
        subject.next(done);
    });
    console.log("count 3");
}, 2000);

setTimeout(() => {
    fs.readFile(__filename, (err, done) => {
        if (err) {
            subject.error(err);
        }
        subject.next(done);
    });
    console.log("count 4");
}, 5000);

setTimeout(() => {
    console.log('status', subject.closed);
    fs.readFile(__filename, (err, done) => {
        if (err) {
            subject.error(err);
        }
        subject.next(done);
        subject.complete();
        console.log('status', subject.closed);
    });
    console.log("count 5");
}, 10000);

subject.subscribe({
    next : (v) => console.log(`observerA Value : received`),
    error : (e) => console.log(`observerA Error ${e}`),
    complete: () => console.log(`observerA complete`)
})

setTimeout(()=>{
    subject.subscribe({
        next : (v) => console.log(`observerB Value : received`),
        error : (e) => console.log(`observerB Error ${e}`),
        complete: () => console.log(`observerB complete`)
    })    
}, 10000);