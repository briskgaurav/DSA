var arr = [2, 5, 1, 65, 21, 20];
var arr2 = [3, 12, 60, 15, 91, 80];
var arr3 = [];

for (var i = 0; i < arr.length; i++) {
  arr3.push(arr[i]);
}
for (var i = 0; i < arr.length; i++) {
  arr3[arr.length + i] = arr2[i];
}

// // SHORTCUT
// arr3=[...arr,...arr2];
console.log(arr3);
