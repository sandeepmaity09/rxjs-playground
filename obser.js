const rxjs = require('rxjs');
const fs = require('fs');

const observable = new rxjs.Observable((subscriber) => {
    fs.readFile(__filename, (err, done) => {
        if (err) {
            subscriber.error(err);
        }
        subscriber.next(done);
    });
    console.log("count 1");

    setTimeout(() => {
        fs.readFile(__filename, (err, done) => {
            if (err) {
                subscriber.error(err);
            }
            subscriber.next(done);
        });
        console.log("count 2");
    }, 1000);

    setTimeout(() => {
        fs.readFile(__filename, (err, done) => {
            if (err) {
                subscriber.error(err);
            }
            subscriber.next(done);
        });
        console.log("count 3");
    }, 2000);

    setTimeout(() => {
        fs.readFile(__filename, (err, done) => {
            if (err) {
                subscriber.error(err);
            }
            subscriber.next(done);
        });
        console.log("count 4");
    }, 5000);

    setTimeout(() => {
        console.log('status', subscriber.closed);
        fs.readFile(__filename, (err, done) => {
            if (err) {
                subscriber.error(err);
            }
            subscriber.next(done);
            // subscriber.complete();
            console.log('status', subscriber.closed);
        });
        console.log("count 5");
    }, 10000);

})

// observable.subscribe((next) => {
//     console.log(next);
// }, (error) => {
//     console.log(error)
// }, () => {
//     console.log("Subscription Closed");
// });

let subscription = observable.subscribe((next) => {
    console.log(next);
}, (error) => {
    console.log(error)
}, () => {
    console.log("Subscription Closed");
})

setTimeout(()=>{
    subscription.unsubscribe();
}, 7000)

setTimeout(()=>{
    observable.subscribe((next) => {
        console.log(next);
    }, (error) => {
        console.log(error)
    }, () => {
        console.log("Subscription Closed");
    })
}, 10000);