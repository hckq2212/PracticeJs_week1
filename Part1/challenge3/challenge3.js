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

// Bonus1
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
// Bonus 2
var dolphinBonus2Score1 = 97;
var dolphinBonus2Score2 = 112;
var dolphinBonus2Score3 = 101;

var dolphinAVGBonus2Score1 = (dolphinBonus2Score1 + dolphinBonus2Score2 + dolphinBonus2Score3)/3;


var koalaBonus2Score1 = 109;
var koalaBonus2Score2 = 95;
var koalaBonus2Score3 = 106;

var koalaAVGBonus2Score1 = (koalaBonus2Score1 + koalaBonus2Score2 + koalaBonus2Score3)/3;

if (dolphinAVGBonus2Score1 > koalaAVGBonus2Score1 ){
    if(dolphinAVGBonus2Score1 >= 100){
        console.log("Dolphin scores: " + dolphinAVGBonus2Score1 + " Koala scores: " +koalaAVGBonus2Score1+". The winner is Dolphin");
    }
    else{
        console.log("Dolphin scores: " + dolphinAVGBonus2Score1 + " Koala scores: " +koalaAVGBonus2Score1+". No one wins");
    }
}
else if (dolphinAVGBonus2Score1 < koalaAVGBonus2Score1){
    if(koalaAVGBonus2Score1 >= 100){
     console.log("Dolphin scores: " + dolphinAVGBonus2Score1 + " Koala scores: " +koalaAVGBonus2Score1+". The winner is Koala");
    }
    else{
        console.log("Dolphin scores: " + dolphinAVGBonus2Score1 + " Koala scores: " +koalaAVGBonus2Score1+". No one wins");
    }
}
else if(dolphinAVGBonus2Score1 == koalaAVGBonus2Score1 && dolphinAVGBonus2Score1 >= 100 && koalaAVGBonus2Score1 >=100){
    console.log("Dolphin scores: " + dolphinAVGBonus2Score1 + " Koala scores: " +koalaAVGBonus2Score1+". The result is draw");
}
else{
    console.log("Dolphin scores: " + dolphinAVGBonus2Score1 + " Koala scores: " +koalaAVGBonus2Score1+". No one wins");
}
