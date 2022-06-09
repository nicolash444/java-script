// concatenar strings

let valor01 = 100;
const valor02 = 5;
console.log('A multiplicação de ' + valor01 +' por ' + valor02 + ' é ' + valor01 * valor02 );
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);

// metodos de strings

console.clear();
const string01  = 'insituto da oportunidade social';

// acessando o primeiro caractere

console.log(string01.charAt(0));
console.log(string01[0]);

// acessando o decimo primeiro caractere
console.log(string01.charAt(10));
console.log(string01[10]);

// tamanho das strings

console.clear();
let texto = 'abcdefehijklmnopqrstuvxwyz';
console.log(texto.length);

console.clear();
const texto2 = 'Também 123 [] é uma strings 231 -1\n';
console.log(texto2.length);

// Maiusculo e minúsculo
console.clear();
const s = 'Hello World!';
console.log(s.toUpperCase());
console.log(s.toLowerCase());

const str = 'Mozilla';
console.log(str.substring(1, 3));
// Saída esperada: "oz"
console.log(str.substring(2));
// Saída esperada: "zilla"

const str1 = 'A raposa é um animal esperto';
const palavras = str1.split(' ');
console.log(palavras[3]);
// Saída esperada: "um"
const chars = str1.split('');
console.log(chars[7]);
// Saída esperada: "a"

const strCopy = str1.split();
console.log(strCopy);
// Saída esperada: Array ["A raposa é um animal esperto"]

