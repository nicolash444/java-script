// classes
class carro {
constructor(nome, ano) {
this.nome = nome;
this.ano = ano;
}
}

// intanciando objetos a classe
let meucarro1 = new carro('ford', 2014);
let meucarro2 = new carro('audi',2019);

// imprimindo valores
console.log(meucarro1.nome);
console.log(meucarro1.ano);
console.log(meucarro2.nome);
console.log(meucarro2.ano);

// declarar nova classe com metodos
console.clear();
class novocarro {
constructor(nome ,ano) {
this.nome = nome;
this.ano = ano;
}
idadeCarro(ano) {
return ano - this.ano;
}
}

// buscando o ano atual auto
let datahoje = new Date();
let ano = datahoje.getFullYear();

// console.log(data hoje);
 
// instanciando o objeto a classe
let meunovocarro = new novocarro('ford',2014);
console.log(meunovocarro.idadeCarro(ano));

// Mais um exmeplo de classe
console.clear();
class ClassePessoa {
constructor(firstName, lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
}
getBirthYear() {
return this.dob.getFullYear();
}
getFullName() {
return `${this.firstName} ${this.lastName}`;
}
}
// Instantiate object
const pessoa1 = new ClassePessoa('John', 'Doe', '1980-04-03');
const pessoa2 = new ClassePessoa('Marry', 'Smith', '1970-06-13');
console.log(pessoa1);
console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear());
console.log(pessoa1.getFullName());

// Lexical this em uma função
console.clear();
// Constructor de função - lexical this
function PessoaFunc(firstName, lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
this.getBirthYear = function () {
return this.dob.getFullYear();
};
this.getFullName = function () {
return `${this.firstName} ${this.lastName}`;
};
}
// Instanciando os objetos
const pessoa3 = new PessoaFunc('John', 'Doe', '1980-04-03');
const pessoa4 = new PessoaFunc('Marry', 'Smith', '1970-06-13');
console.log(pessoa3);
console.log(pessoa4.dob.getFullYear());

// Adicionando prototipos
PessoaFunc.prototype.getBirthDayMonth = function () {
    let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
    return dados;
    };
    PessoaFunc.prototype.getFirstName = function () {
    return `${this.firstName}`;
    };
    console.clear();
    console.log(pessoa3.getBirthDayMonth());
    console.log(pessoa4.getFirstName());