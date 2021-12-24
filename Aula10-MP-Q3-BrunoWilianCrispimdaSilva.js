/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bruno Wilian Crispim da Silva
 * Curso:  IPI
 * Aula: Aula 10 - Registros - Mini-prova
 * Questão: 3
 *
 */

class Sacola {
  constructor(fabricante, volume, biodegradável) { // a palavra constructor estava escrita de forma errada.
      this.fabricante = fabricante // tava faltando o "this."
      this.volume = volume  // tava faltando o "this."
      this.biodegradável = biodegradável // tava faltando o "this."
  }
}
function ehBiodegradavel(s1) { // apaguei o s2, o senhor tá solicitando só uma variavel.

 // coloquei todos essas linhas abaixo que estava faltando e removi a linha  " console.log(s1.biodegradável && s2.biodegradável)" só serve para verificar se tá imprimindo o valor de biodegradavel.
    if (s1.biodegradável == "biodegradavel") { // coloquei todos essas linha que estava faltando e removi a linha  " console.log(s1.biodegradável && s2.biodegradável)" só serve para verificar se tá imprimindo o valor de biodegradavel.
        return true
    }
        return false
}
// coloquei todas essas linha abaixo que tava faltando
var sa1 = new Sacola ('LGS','5L',"biodegradavel")    
var sa2 = new Sacola ('PBT','6L',"naobiodegradavel")
var s1 = ehBiodegradavel (sa2)
console.log(s1)
