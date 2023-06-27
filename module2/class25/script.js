function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink == "coffee"){
            resolve("Order for coffee is placed");
        }else{
            reject("Order not placed");
        }
    })
}

function processDrink(orderStatus){
    return new Promise(function(resolve){
        resolve(`${orderStatus} and served`);
    })
}

function generateBill(orderProcessed){
    return new Promise(function(resolve){
        resolve(`${orderProcessed} and Bill is 100Rs`)
    })
}

let placeOrderPromise = placeOrder("coffee");

placeOrderPromise.then(function(orderStatus){
    // console.log(orderStatus);
    return processDrink(orderStatus);
}).then(function(orderProcessed){
    // console.log(orderProcessed);
    return generateBill(orderProcessed);
}).then(function(bill){
    console.log(bill);
})


placeOrderPromise.catch(function(error){
    console.log(error);
})