function ubahHuruf(kata) {
  // you can only write your code here!
  ubah='';
  for(i=0;i<kata.length;i++) {
    if(kata[i]=='z') {
      ubah+='a';
    }
    else {
      next=Number(kata.charCodeAt(i)) + 1;
      ubah+=String.fromCharCode(next);
    }
  }
  return ubah;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zigzag'));