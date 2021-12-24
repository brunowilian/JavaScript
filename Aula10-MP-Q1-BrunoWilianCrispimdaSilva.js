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
 * Questão: 1
 *
 */

class ventilador {
  constructor (modelo,marca,cor,velocidade,preco){
    this.modelo = modelo
    this.marca = marca
    this.cor = cor
    this.velocidade = velocidade
    this.preco = preco
  }
}

function menorpreco(vet1,vet2) {
  if (vet1.preco < vet2.preco) {
      return -1
  }
    if (vet1.preco == vet2.preco) {
    return 0
  }if (vet2.preco < vet1.preco) { 
    return 1
  }

}

var vet1 = new ventilador ('brunoTX','PRTO','rosa',3,800)
var vet2 = new ventilador ('LOGtx','JGR','azul',2,80)
var menor = menorpreco (vet1,vet2)
console.log(menor)