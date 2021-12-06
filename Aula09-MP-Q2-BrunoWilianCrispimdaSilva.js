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
 * Questão: 2
 */


function comparar (vetor1,vetor2){
	if(vetor1.length != vetor2.length) {
		return false;
	}
  for(var i in vetor1) {
    if(vetor1[i] instanceof Array && vetor2[i] instanceof Array) {
     if(!comparar(vetor1[i], vetor2[i])) {
       return false;
     }
    }
    else if(vetor1[i] != vetor2[i]) {
     return false;
    }
   }
	
  return true
}
var vetor1 = [[1,86,3],[1,2]]
var vetor2 = [[1,86,3],[1,2,6]]

console.log('Resultado:', comparar(vetor1,vetor2))