// // array
// var a = [1, 2, 3];
// //ou
// let num = [5, 8, 4];

// //MÃO NA MASSA

let num = [5, 8, 2, 9, 3];
//adicionar item ao array
num[5] = 6;
//ou usar metodo interno
num.push(7);

//
console.log(num.length);
console.log(`Nosso vetor é ${num}`);
console.log(num);
// pega todos os elementos e poem em ordem crescente
console.log(`organizando por ordem crescente:
${num.sort()}`);

// testando array na estrutura de repetição
for (let pos = 0; pos < num.length; pos++) {
  console.log(num[pos]);
}
