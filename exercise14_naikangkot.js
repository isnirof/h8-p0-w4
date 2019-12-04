function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    hasil = [];
    for (i = 0; i < arrPenumpang.length; i++) {
        for (j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] == rute[j]) {
                naik = j;
            }
            if (arrPenumpang[i][2] == rute[j]) {
                turun = j;
            }
        }
        hasil.push({
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: (turun - naik) * 2000
        })
    }
    return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]