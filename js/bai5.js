/**
 * Khối 1: Input
 * Nhập số num
 * 
 * 
 * Khối 2:
 * B1: Lấy số hàng chục
 * ten = Math.floor(num/10);
 * B2: Lấy số hàng đơn vị
 * unit = num%10;
 * B3: Tính tổng
 * total = ten + unit;
 * 
 * Khối 3: Output
 * Tổng hai chữ số
 *
 */

// Tạo và gán biến
var num = 29;
var ten = 0;
var unit = 0;
var total = 0;

// Lấy số hàng chục
ten = Math.floor(num/10);
console.log("Số hàng chục là: " + ten);

// Lấy số hàng đơn vị
unit = num%10;
console.log("Số hàng đơn vị là: " + unit);


// Tính tổng
total = ten + unit;
console.log("Tổng hai số là: " + total);

document.getElementById("btnTotal").onclick = function(){
    var num = parseInt(document.getElementById("inputNumber").value);
    console.log("Số đã nhập là: " + num);

    ten = Math.floor(num/10);
    console.log("Số hàng chục là: " + ten);

    unit = num%10;
    console.log("Số hàng đơn vị là: " + unit);

    total = ten + unit;
    console.log("Tổng hai số là: " + total);

    document.getElementById("txtTotal").innerHTML = total;
}