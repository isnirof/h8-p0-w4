function benderaInggris(num) {
    if (num % 2 == 0) {
        return 'Input harus ganjil!!!!!!'
    }
    let kolom = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (j == (num - 1) / 2 || i == (num - 1) / 2) {
                kolom += '*';
            }
            else {
                kolom += ' ';
            }
        }
        kolom += '\n';
    }
    return kolom;
}
console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1 -> 9 -> 0123*5678
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/