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
 * Questão: 2
 *
 */

class Ventilador {
	constructor (modelo,marca,cor,velocidade,preco){
		this.modelo = modelo
    this.marca = marca
    this.cor = cor
    this.velocidade = velocidade
    this.preco = preco
		
  }
}

class estoqueVentiladores {
	constructor (quantidade,ventiladores){
		this.quantidades = quantidades
		this.ventiladores = ventiladores
	}
}

function buscarQuantidade(estoque, marca) {
	let somaTotal = 0

		for (let i in estoque.ventiladores) {
		if (estoque.ventiladores[i].mar === marca) {
				somaTotal += estoque.ventiladores[i].preco * estoque.quantidade
	  	}	

	} 
	 estoque.ventiladores.filter(ventilador => ventilador.marca === marca)
				return somaTotal
}


const ventilador1 = new Ventilador ("brunoTX",'Arno','rosa',3,90)
const ventilador2 = new Ventilador ('LOGtx','JGR','azul',3,94)
const ventilador3 = new Ventilador ('PVT400 Turbo','Philco','vermelho',3,140)
const ventilador4 = new Ventilador ('Super Power VSP-40','Mondial','rosa',3,120)

const estoque = new estoqueVentiladores ([ventilador1,ventilador2,ventilador3,ventilador4],[10,12,13,14]);

console.log("A quantidade no estoque é: ",buscarQuantidade(estoque,'Arno'))