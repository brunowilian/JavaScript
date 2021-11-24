
/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bruno Wilian Crispim da Silva
 * Curso: IPI
 * Aula: Aula 08 - Vetores - Mini-prova
 * Questão: 3
 *
 */
/*
function buscar(array, n) {
    for (i = 0; i < n.lenght; i++) { o erro é a palavra "lenght" tá escrita de forma errada a forma certa é length, e no lugar de "n", deve ser array.
        if (a[n] === n) { o erro é "a[n]" deve ser array[i] outro érro é "===" que deve ser "!==".
            return false
        } else {
            return true
        }
    }
}


var vetor = [4,5,6,7,1,2,3,4]
console.log(‘resultado:’, buscar(vetor, 0)) o erro é ter aspas simples no resultado, para resolver é só colocar uma aspas duplas
 */

function buscar(array, n) {
    for (i = 0; i < array.length; i++) {
        if (array[i] !== n) {
            return false
        } else {
            return true
        }
    }
}
var vetor = [4,5,6,7,1,2,3,4]
console.log( buscar(vetor, 4))

