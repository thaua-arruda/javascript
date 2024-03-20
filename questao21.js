/*
Questão 21: Como você pode verificar se um objeto contém uma determinada 
propriedade em JavaScript?
*/

const freeFire = {
    pistola : 'desert',
    capaDeDesert: 495,
    tiroNoPeito: 90,
};

console.log(freeFire.hasOwnProperty('pistola')); // verdadeiro
console.log(freeFire.hasOwnProperty('capaDeScar')); // falso
