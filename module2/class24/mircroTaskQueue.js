function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }
function logE(){console.log("E")}

logA(); // A
setTimeout(logB, 0);
Promise.resolve().then(logC); // C
Promise.resolve().then(logE);
logD(); // D



