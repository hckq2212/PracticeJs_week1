var calcTip  = (bill) => {
    var tip = 50 <= bill <= 300 ? bill * 15/100 : bill * 20/100;
    return tip;
}
calcTip(100);
//And now let's use arrays! So create an array 'bills' containing the test data below
var bills  = [125,555,44];
// Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
var tips = [];
var tips = bills.map(
    (ele) => calcTip(ele)
);
console.log(tips);
//Bonus: Create an array 'total' containing the total values, so the bill + tip
var total = [];
var total = bills.map(
    (ele) => ele + calcTip(ele)
);
console.log(total);
