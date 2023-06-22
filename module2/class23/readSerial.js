let fs = require("fs");


// Asynchronous reading of file 

fs.readFile("f1.txt",function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log("Data of file 1 : "+data)
        fs.readFile("f2.txt",function(error,data){
            if(error){
                console.log(error);
            }else{
                console.log("Data of file 2 : "+data)
                fs.readFile("f3.txt",function(error,data){
                    if(error){
                        console.log(error);
                    }else{
                        console.log("Data of file 3 : "+data)
                    }
                })
            }
        })
    }
})

