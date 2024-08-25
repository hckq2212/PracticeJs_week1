
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


// Challenge 3
console.log("challenge 3: ")

var dolphinScore1 = 96;
var dolphinScore2 = 108;
var dolphinScore3 = 89;

var dolphinAVGScore1 = (dolphinScore1 + dolphinScore2 + dolphinScore3)/3;


var koalaScore1 = 96;
var koalaScore2 = 108;
var koalaScore3 = 89;

var koalaAVGScore1 = (koalaScore1 + koalaScore2 + koalaScore3)/3;

if (dolphinAVGScore1 > koalaAVGScore1){
    console.log("Dolphin scores: " + dolphinAVGScore1 + " Koala scores: " +koalaAVGScore1+". The winner is Dolphin");
}
else if (dolphinAVGScore1 < koalaAVGScore1){
    console.log("Dolphin scores: " + dolphinAVGScore1 + " Koala scores: " +koalaAVGScore1+". The winner is Koala");
}
else{
    console.log("Dolphin scores: " + dolphinAVGScore1 + " Koala scores: " +koalaAVGScore1+". The result is draw");
}

var dolphinBonusScore1 = 97;
var dolphinBonusScore2 = 112;
var dolphinBonusScore3 = 101;

var dolphinAVGBonusScore1 = (dolphinBonusScore1 + dolphinBonusScore2 + dolphinBonusScore3)/3;


var koalaBonusScore1 = 109;
var koalaBonusScore2 = 95;
var koalaBonusScore3 = 123;

var koalaAVGBonusScore1 = (koalaBonusScore1 + koalaBonusScore2 + koalaBonusScore3)/3;

if (dolphinAVGBonusScore1 > koalaAVGBonusScore1 ){
    if(dolphinAVGBonusScore1 >= 100){
        console.log("Dolphin scores: " + dolphinAVGBonusScore1 + " Koala scores: " +koalaAVGBonusScore1+". The winner is Dolphin");
    }
    else{
        console.log("Dolphin scores: " + dolphinAVGBonusScore1 + " Koala scores: " +koalaAVGBonusScore1+". No one wins");
    }
}
else if (dolphinAVGBonusScore1 < koalaAVGBonusScore1){
    if(koalaAVGBonusScore1 >= 100){
     console.log("Dolphin scores: " + dolphinAVGBonusScore1 + " Koala scores: " +koalaAVGBonusScore1+". The winner is Koala");
    }
    else{
        console.log("Dolphin scores: " + dolphinAVGBonusScore1 + " Koala scores: " +koalaAVGBonusScore1+". No one wins");
    }
}
else{
    console.log("Dolphin scores: " + dolphinAVGBonusScore1 + " Koala scores: " +koalaAVGBonusScore1+". The result is draw");
}