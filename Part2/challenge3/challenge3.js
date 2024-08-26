// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
var person = (fullname, mass, height) =>({
    fullname: fullname,
    mass: mass,
    height: height
});

var mark = person("Mark Miller", 78, 1.69);
var john = person("John Smith", 92, 1.95);

// Create a 'calcBMI' method on each object to calculate the BMI (the same
//     method on both objects). Store the BMI value to a property, and also return it
//     from the method
var calcBMI = (mass, height) => {
    var bmi = mass/(height*height);
    return bmi;
}

markBMI= calcBMI(mark.mass, mark.height);
johnBMI = calcBMI (john.mass,john.height);


// Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

if(markBMI > johnBMI){
    console.log("Mark's BMI("+ markBMI + ") is higher than John's ("+johnBMI+")!");
}
else if( johnBMI > markBMI){
    console.log("John's BMI("+ johnBMI + ") is higher than Mark's ("+markBMI+")!");
}
else{
    console.log("Mark's BMI("+ markBMI + ") is equal with John's ("+johnBMI+")!");
}
