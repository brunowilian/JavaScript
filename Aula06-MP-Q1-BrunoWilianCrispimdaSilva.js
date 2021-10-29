
/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bruno Wilian Crispim da Silva
 * Curso: TSI ou IPI
 * Aula: Aula 06 - Laços - Mini-prova
 * Questão: 1
 *
 */



var resultado = 1, iniciais = 1, infeccao = 2, semana = 9;



for (var semana = 0; semana <9; semana++){
    resultado = iniciais * infeccao**semana;
    console.log (resultado);
}
