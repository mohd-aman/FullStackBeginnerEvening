let radius = [1,3,4,7,9,11];

// calculate the diameter, circumference and area of circle by writing function 

//imperative way of writing code.


function diameterOfCircle(radius){
    let diameter = [];
    for(let i=0;i<radius.length;i++){
        diameter.push(2*radius[i]);
    }
    return diameter;
}

function circumferenceOfCircle(radius){
    let circumference = [];
    for(let i=0;i<radius.length;i++){
        circumference.push(2*Math.PI*radius[i]);
    }
    return circumference;
}

function areaOfCircle(radius){
    let area = [];
    for(let i=0;i<radius.length;i++){
        area.push(Math.PI*radius[i]*radius[i]);
    }
    return area;
}

let diameter = diameterOfCircle(radius);
console.log("Diameter", diameter);

let circumference = circumferenceOfCircle(radius);
console.log("Circumference", circumference);

let area = areaOfCircle(radius);
console.log("Area",area);