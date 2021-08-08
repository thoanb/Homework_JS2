/**
 * Khối 1: Input
 * oneDaySalary
 * workDays
 * 
 * Khối 2: 
 * Tính tổng lương nhân viên
 * totalSalary = oneDaySalary * workDays
 * 
 * Khối 3: Output
 * totalSalary 
 */


// Tạo và gán giá trị
// var oneDaySalary = 100000;
// var workDays = 5;
// var totalSalary = 0;

// Tính tổng lương nhân viên
// totalSalary = oneDaySalary * workDays;
// console.log("Lương 1 ngày của nhân viên là: " + totalSalary);

document.getElementById("btnTotalSalary").onclick = function(){
    var workDays = document.getElementById("inputWorkDays").value;
    var oneDaySalary = 100000;
    var totalSalary = 0;

    console.log("Số ngày làm là: "+ workDays);

    totalSalary = oneDaySalary * workDays;

    document.getElementById("txtTotalSalary").innerHTML = totalSalary;
}

