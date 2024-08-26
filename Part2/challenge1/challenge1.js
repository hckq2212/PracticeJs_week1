console.log("Data 1 :")
var calcAverage = (a,b,c) =>{
    return Math.round(a+b+c/3);
}

var checkWinner = (avgDolphins, avgKoalas) =>{
    if(avgDolphins >= 2*avgKoalas){
        return console.log("Dolphins win ("+avgDolphins + " vs " + avgKoalas+")");
    }
    else if(avgKoalas >= 2*avgDolphins){
        return console.log("Koalas win ("+avgKoalas + " vs " + avgDolphins+")");
    }
    else{
        return console.log("No one wins ("+avgDolphins + " vs " + avgKoalas+")")
    }
}
checkWinner(calcAverage(44,23,71), calcAverage(65,54,49));
console.log("Data 2 :")
checkWinner(calcAverage(85,54,41), calcAverage(23,34,27));