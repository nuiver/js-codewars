"use strict";

var a = [1, 3, 4, 7, 8, 11, 22, 23, 34, 35, 38, 39, 40];
var b = [2, 3, 5, 6, 7, 8, 11, 34, 35, 36, 37, 38, 39];
// var z1 = new Array();
var z2 = new Array();


// (function compare() {
//   for (var x in a) {
//     for (var y in b) {
//       if (a[x] === b[y]) {
//         z1.push(a[x]);
//       }
//     }
//   }
//   console.log(z1);
// })();

(function compare() {
  for (let x of a) {
    for (let y of b) {
      if (x === y) {
        z2.push(x);
      }
    }
  }
  console.log(z2);
})();
