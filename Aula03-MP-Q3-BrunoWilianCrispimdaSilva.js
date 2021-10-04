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
 * Questão: 3
 *
 */


/*  (1) var a == 2; 2; O erro é ter colocado (==) que é um operador de comparação. Solução é colocar (=) no lugar de (==).

    (2) b == 2; O erro é ter colocado (==) que é um operador de comparação e não ter colocado o tipo
     de variável. Solução é um tipo de variável e colocar (=) no lugar de (==).
     
	(3) let c == 2; O erro é ter colocado (==) que é um operador de comparação e também não ter 
    colocado o (;) no final. Solução é colocar (=) no lugar de (==) e colocar (;) no final.

	(4) var d == 2; O erro é ter colocado (==) que é um operador de comparação. Solução é colocar (=) 
    o lugar de (==).

    (5) media  == (a + a + a + a)%4; // O erro é ter colocado (==) que é um operador de comparação e
     ter colocado (%) que retorna o inteiro restante da divisão dos operadores. Solução é colocar
      (=) no lugar de (==) e colocar ( / )  que faz a divisão, no lugar de (%).
	
	(6) console.log("media: a"); O erro é ter colocado “media a“, com isso ele vai imprimir esse texto na tela. 
    Para imprimir a media teve ser colocado (media) que é o nome da variável.
*/

var nota1 = 10, nota2 = 10, nota3 =10;
let nota4 = 10;
media  = (nota1 + nota2 + nota3 + nota4)/4; /* agora vai pegar tranquilo */


console.log('A média do Aluno é: '  + media) ;
