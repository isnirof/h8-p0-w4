function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let faktor1 = 0;
  let faktor2 = 0;
  let min = 0;
  for (let i = 1; i <= angka; i++) {
    if (angka % i == 0) {
      faktor1 = i;
      faktor2 = angka / i;
      digit = String(faktor1).length + String(faktor2).length;
    }
    if (digit < min || min == 0) {
      min = digit;
    }
  }
  return min;

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2