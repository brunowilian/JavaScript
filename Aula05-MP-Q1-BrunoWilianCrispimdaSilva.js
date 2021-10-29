
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
 * Questão: 1
 *
 */

let n1 = 100;
let n2 = 100;

if (n1 >= -100 && n1<=100) {
    if (n2 >= -100 && n2<=100 ) {
        console.log("Ambos estão no intervalo inclusivo")
    }
   else{
    console.log("  não estao no intervalo inclusivo")
   }
} else {
    console.log(" não estao no intervalo inclusivo")
}