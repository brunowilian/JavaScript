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
 * Questão: 2
 *
 */


function comparar (vetor1,vetor2){

	for (i = 0; i<vetor1.length; i++){
		if (vetor1[i] !== vetor2[i]){
			return false
		}
	}
	return true
}
var resulta = comparar ([1,2,3,4,9,8,5,9],[1,2,3,4,9,8,5,9])
console.log('Resultado:', resulta)