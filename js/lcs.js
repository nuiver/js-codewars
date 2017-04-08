"use strict";

let k = "adefjhalwauehasfzkhkausydf";
let l = "duekfaiuhvygasldybvysvzkjxhcgkhb";

(function lcs(fir, sec) {
  let z = new String();
  for (let x of fir) {
    for (let y of sec) {
      if ( x === y && !z.includes(x) ){
        z += x;
      }
    }
  }

  console.log(z);
})(k, l);
