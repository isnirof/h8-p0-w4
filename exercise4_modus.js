function cariModus(arr) {
  // you can only write your code here!
  hasil = [];
  for (i = 0; i < arr.length; i++) {
    value = false;
    for (j = 0; j < hasil.length; j++) {
      if (arr[i] == hasil[j][0]) {
        hasil[j][1]++;
        value = true;
      }
    }
    if (!value) {
      hasil.push([arr[i], 1]);
    }
  }

  //sort dari yg terbesar
  run = true;
  while (run) {
    run = false;
    for (i = 0; i < hasil.length - 1; i++) {
      if (hasil[i][1] < hasil[i + 1][1]) {
        [hasil[i], hasil[i + 1]] = [hasil[i + 1], hasil[i]];
        run = true;
      }
    }
  }
  if (hasil.length == 1) {
    return -1;
  }
  else if (hasil[0][1] == 1) {
    return -1;
  }
  else {
    return hasil[0][0];
  }

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1