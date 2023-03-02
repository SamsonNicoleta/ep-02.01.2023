function uppercaseFirstLetter(sentence) {
    let words = sentence.split(' ');
    for(let i = 0; i < words.length; i++) {
      words[i] = words[i].at(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

let r = uppercaseFirstLetter("astazi este joi");
console.log(r);
