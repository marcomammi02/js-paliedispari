let word = prompt('Inserisci una parola e ti dirò se è palindroma...');
let reverseWord = '';

let i = word.length - 1;

while (i >= 0) {
    reverseWord += word[i];
    i --;
}

if (word == reverseWord) {
    console.log('La parola inserita è palindroma!')
}else {
    console.log('La parola inserita non è palindroma!')
}