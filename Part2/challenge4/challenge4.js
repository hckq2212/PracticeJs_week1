// Create an array 'bills' containing all 10 test bill values
var bills = [22,295,176,440,37,105,10,1100,86,52];
// Create empty arrays for the tips and the totals ('tips' and 'totals')
var tips =[];
var totals = [];
// Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
var calcTip  = (bill) => {
    var tip = 50 <= bill <= 300 ? bill * 15/100 : bill * 20/100;
    return tip;
}

for (var ele of bills){
    tips.push(calcTip(ele))
    totals.push((ele) +calcTip(ele))
}
console.log(tips);
console.log(bills);

console.log("Bonus: ")

var calcAverage = (arr) =>{
    var sum = 0; 
    for(var element of arr){
        sum+=element;
    }
    var avg = sum/arr.length;
    return avg;
}
console.log(calcAverage(totals));
;

