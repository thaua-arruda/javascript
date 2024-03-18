/*
Questão 10: Como você pode remover o último elemento de um array em 
JavaScript?
*/

let meuPato = ["marans", "gustavo", "jao", "nikael"];

 console.log(meuPato); // [marans, gustavo, jao, nikael]

 let meuPatoRemovido = meuPato.pop();

 console.log(meuPato); // [marans, gustavo, jao]

 console.log(meuPatoRemovido); // [nikael]