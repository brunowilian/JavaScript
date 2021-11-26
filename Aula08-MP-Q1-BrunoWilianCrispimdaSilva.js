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
 * Questão: 1
 *
 */


function media_impares (vet){
var impares = 0
var total = 0
var media = 0
 for (i = 0; i<vet.length; i++){
   if (vet[i] % 2 ==1){
    impares++
     total += vet[i]
    media = total / impares
   console.log(vet[i])
  }
}
console.log ("Tem ",impares ,"números impares")
console.log("A soma desses números é:", total)
console.log("A media desses números é: ", media.toFixed(2))

}
 media_impares ([1,2,5,5,3,9])

