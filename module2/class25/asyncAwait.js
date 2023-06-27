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


async function serveOrder(){
    try{
        let orderStatus = await placeOrder("coffee");
        let orderProcessed = await processDrink(orderStatus);
        let bill = await generateBill(orderProcessed);
        console.log(bill);
    }catch(error){
        console.log(error);
    }
}

serveOrder();