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
 * Questão: 1
 */


function media_impares (vet){
  var impares = 0
  var total = 0
  var media = 0
  console.table(vet)
   for (var i = 0; i < vet.length; i++){
     for (let j = 0; j < vet[i].length; j++ ) {
     if (vet[i][j] % 2 == 1){
      impares++
       total += vet[i][j]
       console.log(vet[i][j])
      }
    }
  }
 
  media = total / impares
  console.log ("Tem ",impares ,"números impares")
  console.log("A média é: ")
  return   media
  
  }
  var vetorr = [[5,43,5,16],[41,9,7]]
   console.log (media_impares (vetorr))