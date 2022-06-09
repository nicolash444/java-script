// Método querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';

// busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML = 'mudei o texto aqui');

// busca somente a classe
let elemento = (document.querySelector('.myclass').style.fontsize = 'x-large');

// funcao chamada pelo evento onclick
const clique = () => {
document.querySelector('my-span').style.backgroundcolor = '#CEFBBA'; };

// metodo queryselectorall
let listali = document.querySelectorAll('li');
for (i = 0; i < listali.length; i++) {
 listali[i].style.border = '1px solid #0000ff';
 listali[i].style.padding = '3px';
 }
      console.log(listali); 

// BUSCA POR ID
let myli = document.querySelectorAll('#my-li');
myli.forEach((li) => (li.innerHTML = 'mudou aqui mano!'));

// Busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'));

// Busca por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));
