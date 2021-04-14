/* let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

varA2 = varA;
varA = varB;
varB = varC;
varC = varA2;
console.log(varA, varB, varC);
*/

// fazendo o exercicio com JS

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
