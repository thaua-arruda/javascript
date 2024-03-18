/*
Questão 13: Como você pode verificar se um valor está contido em um array 
em JavaScript?
*/

const beasts = ["fanta", "coca", "pepsi", "sprite", "coca"];

console.log(beasts.indexOf("coca"));
// Expectativa de saída: 1

// Iniciar no index 2
console.log(beasts.indexOf("coca", 2));
// Expectativa de saída: 4

console.log(beasts.indexOf("sukita"));
// Expectativa de saída: -1