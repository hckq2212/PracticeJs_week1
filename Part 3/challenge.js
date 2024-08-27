var printForecast = (arr) =>{
    var n = 1;
    var result = ``;
    for(ele of arr){
        result += `${ele}°C in ${n}...`;     
        n++;
    }
    return result;
}
var data1 =[17, 21, 23];
var data2 = [12, 5, -5, 0, 4]
console.log(printForecast(data1));