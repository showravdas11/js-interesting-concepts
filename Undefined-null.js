
// Why Undefined Comes
// 1- Variable value not assigned
// 2- function didn't return anything
// 3- just wrote return but didn't return anything
// 4- parameter that isn't passed
// 5- property that dosen't exsit in an object
// 6- accessing array element out of range
// 7- accessing delete array element 

let first;
// console.log(first);
// function age(x, y) {
//     const sum = x + y;
// }
// const result = age(91, 5);
// console.log(result);


//////////////////
// function age(x, y) {
//     const sum = x + y;
//     return;
// }
// const result = age(20, 25);
// console.log(result);

////////////////
// function age(x, y) {
//     const sum = x * 2;
//     console.log(y)
//     return sum;
// }
// age(20);

const details = { name: 'showrav', location: 'Satkania chattogram' };
// console.log(details.phone);

const arr = [22, 56, 48, 12];
// console.log(arr[6]);
delete arr[3]
console.log(arr[3]);

// undefined মানে হচ্ছে তুমি কোনো কিছু ডিফাইন্ড কর নাই বা সেট কর নাই

// আর null মানে হচ্ছে ওইটার কোনো মান এই নাই 