/**
 * Khối 1: Input
 * Nhập giá 1 usd hiện tại
 * oneUsd
 * inputUsd
 * 
 * Khối 2: 
 * Tính số tiền đã quy đổi
 * vnd = oneUsd * inputUsd
 * 
 * Khối 3: Output
 * Số tiền đã quy đổi
 */

// Tạo và gán giá trị
// var oneUsd = 23500;
// var inputUsd = 2;
// var vnd = 0;

// Tính số tiền đã quy đổi
// vnd = oneUsd * inputUsd;
// console.log("Số tiền đã quy đổi là: " + vnd);

document.getElementById("btnChange").onclick = function(){
    var inputUsd = parseFloat(document.getElementById("inputUsd").value);
    var oneUsd = 23500;
    var vnd = 0;

    console.log("Số tiền cần quy đổi là : "+ inputUsd);

    vnd = oneUsd * inputUsd;

    document.getElementById("txtChange").innerHTML = vnd;
}

