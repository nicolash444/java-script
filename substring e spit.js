// substring e spit 
console.clear();
const str = 'mozilla';
 console.log(str.substring(1, 3));
 console.log(str.substring(2));
  const str1 = 'a raposa e um animal esperto';

const palavras = str1.split('');
console.log(palavras[3]);

// saida esperada: "um"

const chars = str1.split('');
console.log(chars[7]);

// saida esperada: "a"

const strCopy = str1.split('');
console.log(strCopy);
// Saída esperada: Array ["A raposa é um animal esperto"]

// Substituir string
console.clear();
let mensagem = 'Venha para a Microsoft!';
console.log(mensagem);
let novaMensagem = mensagem.replace('Microsoft', 'IOS');
console.log(novaMensagem);
