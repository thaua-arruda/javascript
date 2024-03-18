/*
Questão 11: Qual é a diferença entre let, const e var em JavaScript?
*/
(let)
// Let tem escopo de bloco (tudo que está entre chaves {})


(var)
// Diferente da let, a Var tem escopo global ou de uma função
//O escopo é global quando uma variável Var é declarada fora de uma função.
//Isso significa que qualquer variável que seja declarada com Var fora de um bloco de função pode ser utilizada na janela inteira.
//Var tem escopo de função quando é declarado dentro de uma função. Isso significa que ela está disponível e pode ser acessada somente de dentro daquela função.


(const)
//Assim como as declarações de let, as declarações de Const somente podem ser acessadas dentro do bloco onde foram declaradas.
//Assim como var,  uma variável declarada com let pode ser atualizada dentro de seu escopo. Diferente de var, no entanto, uma variável let não pode ser declarada novamente dentro de seu escopo.