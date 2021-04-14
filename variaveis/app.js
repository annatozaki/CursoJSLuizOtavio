const nome = 'Ana';
const sobrenome = 'Cirilo';
const idade = 25;
const peso = 140;
const altura = 1.70;
const imc = peso / (altura * altura);
const anoNascimento = 2020 - idade;

console.log(`${`${nome} ${sobrenome}`} tem ${idade} anos e pesa ${peso} quilos. Além disso, tem ${altura} de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimento}`);
