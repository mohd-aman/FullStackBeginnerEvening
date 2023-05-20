let radius = [1,3,4,7,9,11];

function calculate(radius,cb){
    let result = [];
    for(let i=0;i<radius.length;i++){
        result.push(cb(radius[i]))
    }
    return result;
}

let diameter = calculate(radius,diameterOfCircle);
console.log(diameter);

function diameterOfCircle(r){
    return 2*r;
}

let circumference = calculate(radius,circumferenceOfCircle);
console.log(circumference);

function circumferenceOfCircle(r){
    return 2*Math.PI*r;
}

let area = calculate(radius,areaOfCircle);
console.log(area);

function areaOfCircle(r){
    return Math.PI*r*r;
}
