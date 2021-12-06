/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bruno Wilian Crispim da Silva
 * Curso: IPI
 * Aula: Aula 09 - Arrays - Mini-prova
 * Questão: 3
 */

/*
function buscar(array, n) {
  for (j = 0; j < array[j].length; i++) { // O "[j]", não deveria tá ali, e no lugar de "i++" deve ser "j++".
      for (i = 0; i < array.length; j++) { // O "[j]", deve tá depois de array, e no lugar de "j++" deve ser "i++".
          if (array[i][j] == n) { //  o erro é a posicao "[i][j]", que deve ser "[j][i]".
              return true
          }
      }
      return false  // O return deve ser fora do For.
  }
}


var a =  [ [1,2,3,4,5,6], [1,2,3,4,5,6] ]
console.log(‘resultado:’, buscar(vetor, 0)) Os erros é ter apostrofo no resultado, para resolver é só colocar uma aspas duplas ou aspas simples, e trocar "vetor" pela variavel "a"
*/


function buscar(array, n) {

  for (j = 0; j < array.length; j++) {  
      for (i = 0; i < array[j].length; i++) { 
          if (array[j][i] == n) { 
              return true
        }
      }
    }
    return false 
}
var a =  [ [1,2,3,4], [1,2,3,4,5] ]
console.log('resultado:', buscar(a, 6))

