/**
 * Khối 1: Input
 * 5 số thực
 * realNumber1
 * realNumber2
 * realNumber3
 * realNumber4
 * realNumber5
 * 
 * Khối 2: 
 * Tính giá trị trung bình của 5 số thực
 * average = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5
 * 
 * Khối 3: Output
 * Giá trị trung bình của 5 số thực
 */

// Tạo và gán giá trị
// var realNumber1 = 1;
// var realNumber2 = 2;
// var realNumber3 = 3;
// var realNumber4 = 4;
// var realNumber5 = 5;
// var average = 0;

// Tính giá trị trung bình của 5 số thực
// average = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;
// console.log("Giá trị trung bình của 5 số là: " + average);


document.getElementById("btnAverage").onclick = function(){
    var realNumber1 = parseInt(document.getElementById("inputNumber1").value);
    var realNumber2 = parseInt(document.getElementById("inputNumber2").value);
    var realNumber3 = parseInt(document.getElementById("inputNumber3").value);
    var realNumber4 = parseInt(document.getElementById("inputNumber4").value);
    var realNumber5 = parseInt(document.getElementById("inputNumber5").value);
    var average = 0;

    console.log("Number lần lượt là: "+ realNumber1, realNumber2, realNumber3, realNumber4, realNumber5);

    average = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;

    document.getElementById("txtAverage").innerHTML = average;
}
