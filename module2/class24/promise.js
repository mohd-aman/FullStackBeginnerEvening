let myPromise = new Promise(function(resolve,reject){
    let a = 5;
    let b = 5;
    if(a == b){
        resolve("Success !!! and Yes they are equal");
    }else{
        reject("OOPs Error")
    }
})

// if promise is fulfilled we do it in then method

myPromise.then(function(data){
    console.log(data);
})

// if promise is reject or failure

myPromise.catch(function(error){
    console.log(error);
})

//finally cb will run either it's success or failure
myPromise.finally(function(){
    console.log("Move on from the promise");
})