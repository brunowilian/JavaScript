/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bruno Wilian Crispim da Silva
 * Curso: IPI
 * Aula: Aula 03 - Variáveis, Tipos e Operadores - Mini-prova
 * Questão: 2
 *
 */

var resultado = 0, iniciais = 1, infeccao = 2, semana = 10;



for (var semana = 0; semana <10; semana++){
    resultado = iniciais * infeccao**semana;
    console.log (resultado);
}

