
/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bruno Wilian Crispim da Silva
 * Curso: IPI
 * Aula: Aula 05 - Operadores Lógicos - Mini-prova
 * Questão: 2
 *
 */


let n1 = false
var n2 = true
let n3 = true

 if ((n1 && n2 && !n3) || (n1 && n3 && !n2) || (n2 && n3 && !n1) ) {
    console.log("Verdadeira")
} else {
    console.log("falso")
} 

