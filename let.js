// Declaração de uma variável
let nome; // Escopo de bloco
var idade; // Escopo global
const PI = 3.14; // Escopo de bloco e global


function soma() {
  if(true) {
    //const PI = 3.14; // Escopo global
    console.log(PI)
  }
  PI = 50
  console.log(PI)
}

soma()