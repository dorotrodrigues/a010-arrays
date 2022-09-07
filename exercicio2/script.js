// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana 
// falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

const arrayNumeros = [26, 35, 2, 5, 1, 15]
const arrayStrings = ["arroz", "feijão", "açúcar", "azeite",]
const arrayMisto = [1, 2, 3, 4, "amarelo", "rosa", "azul", true, false]

console.log(arrayNumeros.length) //length imprime a quantidade de palavras ou números dentro do array.
console.log(arrayStrings.length)
console.log(arrayMisto.length)

console.log(arrayNumeros[0], arrayStrings[1], arrayMisto[2])
console.log(arrayNumeros.includes(5), arrayMisto.includes(5)) //Includes imprime true ou false do que está do array.

