let valores = [8, 1, 7, 4, 2, 9];
//codigo tradicional do percurso em vetores.
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");
console.log("----------Forma mais facil após o EcmaScript15----------");

//forma mais facil após o EcmaScript15
//for = para | in = dentro
for (let pos in valores) {
  console.log(`a posição ${pos} tem o valor ${valores[pos]}`);
}
console.log("--------------------------------------------------------");

//FUNÇÃO INDEXOF

num.indexOf(7);
