/*function uppercaseFirstLetter(sentence) {
    let words = sentence.split(' ');
    for(let i = 0; i < words.length; i++) {
      words[i] = words[i].at(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

let r = uppercaseFirstLetter("astazi este joi");
console.log(r);*/

function squareNegativeNumbers(array) {
    let negativeNumbers = array.filter(element => element < 0);
    let squaredNegativNumbers = negativNumbers.map(elem => element * element);
  
    return squaredNegativNumbers;
}

let n = [3, -2, 4, -4, 4, 16, -3, 10, 9, 15, -1, 6];
console.log(squareNegativNumbers(n));
