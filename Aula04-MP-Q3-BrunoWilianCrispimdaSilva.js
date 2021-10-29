/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo:Bruno Wilian Crispim da Silva
 * Curso: IPI
 * Aula: Aula 04 - Execução Condicional - Mini-prova
 * Questão: 3
 *
 */
var b1 = false // O errro foi ter um (<), solucao foi  removê 
var b2 = false // O errro foi ter um (<), solucao foi  removê 


if (!b1) {
    if (!b2) {
        console.log("passou no teste") // o erro foi a palavra (não), solução foi removê
    } else {
        console.log("não passou no teste") // o erro foi não ter a palavra (não), solução foi colocar a palavra 
    }
} else {
    console.log("não passou no teste")// o erro foi não ter a palavra (não), solução foi colocar a palavra 
}

