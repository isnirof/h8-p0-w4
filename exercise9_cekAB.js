function checkAB(sentence) {
    for (let i = 0; i < sentence.length; i++) {
        if ((sentence[i] === 'a' && sentence[i + 4] === 'b') || (sentence[i] === 'b' && sentence[i + 4] === 'a')) {
            return true;
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false