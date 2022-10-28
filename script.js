// Palindromic word

let word = prompt('Inserisci una parola e ti dirò se è palindroma...');
let reverseWord = '';

let i = word.length - 1;

while (i >= 0) {
    reverseWord += word[i];
    i --;
}

if (word == reverseWord) {
    console.log('La parola inserita è palindroma!');
}else {
    console.log('La parola inserita non è palindroma!');
}


// Pari o Dispari

let choice = prompt('Pari o Dispari?')
let userNumber = prompt('Inserisci un numero da 1 a 5...');
let pcNumber = Math.floor(Math.random() * 6) + 1;
let resultNumber = userNumber + pcNumber;
let resultScanner = resultNumber % 2;

console.log('Hai scelto ' + choice);
console.log('Il tuo numero è ' + userNumber);
console.log('Il mio numero è ' + pcNumber);

if (choice == 'pari' && resultScanner == 0) {
    console.log('Hai vinto!');
} else if (choice == 'dispari' && resultScanner != 0) {
    console.log('Hai vinto0!');
} else {
    console.log('Hai perso!')
}