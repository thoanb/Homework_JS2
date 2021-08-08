/**
 * Khối 1: Input
 * Chiều dài và chiều rộng hình chữ nhật
 * length
 * width
 * 
 * Khối 2: 
 * B1: Tính chu vi hình chữ nhật
 * c = (length + width) * 2
 * B2: Tính diện tích hình chữ nhật
 * s = length * width
 * 
 * Khối 3: Output
 * Chu vi hình chữ nhật
 * Diện tích hình chữ nhật
 */

// Tạo và khai báo biến
// var length = 3;
// var width = 4;
// var c = 0;
// var s = 0;

// Tính chu vi hình chữ nhật
// c = (length + width) * 2;
// console.log("Chu vi hình chữ nhật là: " + c);


// Tính diện tích hình chữ nhật
// s = length * width;
// console.log("Diện tích hình chữ nhật là: " + s);

// console.log("Chu vi hình chữ nhật là: " + c + "\n" + "Diện tích hình chữ nhật là: " + s);

document.getElementById("btnCalculate").onclick = function(){
    var length = parseFloat(document.getElementById("inputLength").value);
    var width = parseFloat(document.getElementById("inputWidth").value);
    var c = 0;
    var s = 0;

    console.log("Chiều dài và chiều rộng là : "+ length + ", " + width);

    c = (length + width) * 2;
    s = length * width;
    
    console.log("Chu vi hình chữ nhật là: " + c + "\n" + "Diện tích hình chữ nhật là: " + s);

    document.getElementById("txtC").innerHTML = c;
    document.getElementById("txtS").innerHTML = s;
}