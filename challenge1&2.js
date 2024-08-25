
var markHeight1 = 1.69;
var markWeight1 = 78;
var johnHeight1 = 1.95;
var johnWeight1 = 92;

var markBMI1 =  markWeight1/(markHeight1 ** 2);
var johnBMI1 = johnWeight1/(johnHeight1 ** 2);

console.log("Data 1:")
console.log("Mark's BMI = " + markBMI1);
console.log("John's BMI = " + johnBMI1);
if(markBMI1 > johnBMI1){
    console.log("Mark's BMI is higher");
}
else{
    console.log("John's BMI is higher");
}

var markHeight2 = 1.88;
var markWeight2 = 95;
var johnHeight2 = 1.76;
var johnWeight2 = 85;

var markBMI2 =  markWeight2/(markHeight2 ** 2);
var johnBMI2 = johnWeight2/(johnHeight2 ** 2);

console.log("Data 2:")
console.log("Mark's BMI = " + markWeight2/(markHeight2 ** 2));
console.log("John's BMI = " + johnWeight2/(johnHeight2 ** 2));

if(markBMI2 > johnBMI2){
    console.log("Mark's BMI is higher");
}
else{
    console.log("John's BMI is higher");
}
