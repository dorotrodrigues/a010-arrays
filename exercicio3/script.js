// <!-- # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia; -->

const arrayNumerosOriginal = [26, 35, 2, 5, 1, 15]
const arrayNumerosCopia = arrayNumerosOriginal

const arrayStringsOriginal = ["arroz", "feijão", "açúcar", "azeite",]
const arrayStringsCopia = arrayStringsOriginal

const arrayMistoOriginal = [1, 2, 3, 4, "amarelo", "rosa", "azul", true, false]
const arrayMistoCopia = arrayMistoOriginal

arrayNumerosOriginal.push(40)
console.log(arrayNumerosOriginal, arrayNumerosCopia)

arrayStringsOriginal.pop()
console.log(arrayStringsOriginal, arrayStringsCopia)

arrayMistoOriginal.splice(1,1)
console.log(arrayMistoOriginal, arrayMistoCopia)
