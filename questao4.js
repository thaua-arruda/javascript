/*
Questão 4: Qual é a diferença entre == e === em JavaScript? 


Resposta
== (Igual a ou Equal to) – é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável.

=== (Valor e Tipo igual) – é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.

*/

let num1 = 1;
let num2 = "1"

console.log(num1 === num2);
console.log(typeof num1);
console.log(typeof num2);

