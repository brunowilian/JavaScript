/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bruno Wilian Crispim da Silva
 * Curso:  IPI
 * Primeira Recuperação Individual
 *
 */
const s = require('prompt-sync')();

// para adicionar mais opções ao menu altere esta função
function imprimirMenu() {
  console.log(".")
	console.log('~~ Jokenpo ~~')
  console.log ('  ____	         _____      _    _  ')
  console.log ('_/  _ \\        O____ O     (_)  / ) ')
  console.log('/ _ - _ \\      /     /       | (_/  ')
  console.log('\\_______/     /____ /       _+/  ')
  console.log ("             O_____O       //|\\ " )
  console.log("                          // || ")
  console.log("                         (/  |/  ")
	console.log('Menu:')
	console.log('(1) Jogar')
	console.log('(2) Sobre')
  console.log('(3) Como jogar')
  console.log('(4) Historia do Jokenpo')
	console.log('(5) Sair')
}


// note como esta operação está isolada em uma função
// as novas operações que vocês vão implementar na prova 
// devem seguir o mesmo modelo

function jogar() {
  var jogador1 = 0
  var jogador2 = 0
  var jogadores = s("É 1 ou 2 jogadores ? ")

  if (jogadores == 2) {
    jogador1 = s("Por favor, jogador 1 escolher uma opção: (1) pedra, (2) papel, (3) Tesoura: ")
    jogador2 = s("Por favor, jogador 2 escolher uma opção: (1) pedra, (2) papel, (3) Tesoura: ")

    if ((jogador1 == 3 && jogador2 == 1 ) || (jogador1 == 1 && jogador2 == 2) ||(jogador1 == 2 && jogador2 == 3)) {
      console.log(" jogador 2 ganhou!!")
      console.log(".")
    } 
    else if ((jogador1 == 3 && jogador2 == 3 ) || (jogador1 == 1 && jogador2 == 1) ||(jogador1 == 2 && jogador2 == 2)) {
      console.log("O jogo foi Empate")
      console.log(".")
    } 
     else if ((jogador1 == 1 && jogador2 == 3 ) || (jogador1 == 2 && jogador2 == 1) ||(jogador1 == 3 && jogador2 == 2)) {
      console.log("jogador 1 ganhou!!")
      console.log(".")
    }  
    else{
      console.log("Valor invalido, comece o jogo novamente.")
      switch (opcao) {
        case 1:
          jogar()
          break
      }
      console.log(".")
    }
    
  }
  if (jogadores == 1) {
    var estrategia = s ("Voce quer a 1º estrategia, 2º Estrategia ou 3º Estrategia? ")

    if (estrategia > 3) {
        console.log("Valor Inválido, Comece o jogo novamente.")
        switch (opcao) {
          case 1:
            jogar()
            break
        }
   }

      var jogador1 = s("Escolhar: (1) pedra, (2) papel, (3) Tesoura: ")

      if (jogador1 > 3) {
        console.log("Valor Inválido, Comece o jogo novamente.")
        switch (opcao) {
          case 1:
            jogar()
            break
        }
      }
    if (estrategia == 1) {
      if ((jogador1 == 1 && computador == 3 ) || (jogador1 == 2 && computador == 1) ||       (jogador1 == 3 && computador == 2))  {
      }
        console.log("Parabéns Voce:")
        console.log  ('┬  ┬┌─┐┌┐┌┌─┐┌─┐┬ ┬')
        console.log  ('└┐┌┘├┤ ││││  ├┤ │ │')
        console.log  (' └┘ └─┘┘└┘└─┘└─┘└─┘')
        console.log(".")
      
    }
    if (estrategia == 2){
      if ((jogador1 == 1 && computador == 2 ) || (jogador1 == 2 && computador == 3) ||(jogador1 == 3 && computador == 1))  {
      }
        console.log("Voce perdeu!!")
        console.log(".")
      
    }
    if (estrategia == 3){
      var aleatorio = Math.floor(Math.random() * 3) + 1
      if ((jogador1 == 3 && aleatorio == 1 ) || (jogador1 == 1 && aleatorio == 2) ||(jogador1 == 2 && aleatorio == 3)) {
        console.log("Voce perdeu!!")
      } else if ((jogador1 == 3 && aleatorio == 3 ) || (jogador1 == 1 && aleatorio == 1) ||(jogador1 == 2 && aleatorio == 2)) {
        console.log("O jogo foi Empate")
      }  
      else{
        console.log("Voce ganhou!!")
        console.log(".")
      }
        console.log("O computador escolheu ", aleatorio)
        console.log(".")
   }
      
}
    if (jogadores > 2) {
        console.log("Valor Inválido, Comece o jogo novamente.")
      switch (opcao) {
        case 1:
          jogar()
          break
      }
    }
}

function sobre() {
  console.log("-------------------------------------------------------------------------------")
	console.log("Instituto Federal de Educacaoo, Ciencia e Tecnologia - IFPE")
	console.log("Cursos: Informatica para Internet | Sistemas para Internet")
 	console.log("Componentes Curriculares: Logica de Programacao e Estrutura de Dados | Introducao a Programacao Imperativa")
 	console.log("Bruno Wilian Crispim da Silva - bwcs@discente.ifpe.edu.br")	
  console.log ("Curso: IPI, codigo desenvolvidos para primeira recuperação individual ")
}

function comojogar(){
  console.log("-------------------------------------------------------------------------------")
  console.log(" ---- Como brincar de Jokenpo ---")
  console.log('Jeito de brincar, cada participante com as mãos para trás. Quando o coordenador da brincadeira der o sinal, uma pessoa de cada pessoa deverá mostrar a mão, no formato de pedra (mão fechada), papel (mão aberta) ou tesoura (dois dedos, indicador e médio, formando um "V").')
  console.log('A tesoura corta o papel, mas quebra com a pedra; o papel embrulha a pedra, mas é cortado pela tesoura e a pedra quebra a tesoura e é embrulhada pelo papel.')
}

function historia(){
  console.log("-------------------------------------------------------------------------------")
  console.log(" As primeiras referências deste jogo são encontradas em uma obra chinesa, chamada Wazuzu, de 1600 a.C. Só mais tarde, no século XVII, o jogo chegou ao Japão por meio de uma comunidade chinesa em Nagasaki. No decorrer da história japonesa, é muito comum encontrar referências a sansukumi-ken, que em tradução livre significa ken (jogos de punho), san (três formas) e sukumi (impasse). O sansukumi-ken é como apresenta-se o conceito básico do jogo: três elementos em combate entre si. Uma das primeiras variações, encontrada ao longo da história japonesa, é conhecida como mushi-ken, importado diretamente da China. No mushi-ken, o sapo (representado pelo polegar) vence a lesma (representada pelo dedo mínimo) que vence a cobra (representada pelo dedo indicador) que vence o sapo. O Jankenpon como conhecemos, usando gestos para representar os elementos pedra, papel e tesoura, tornou-se comum na versão mais moderna do jogo, criada no final do século XIX, entre os períodos Edo e Meiji. Mas foi apenas no início do século XX, com a abertura do Japão para o Ocidente, que o jogo se difundiu para além do país, sendo jogado e reconhecido por quase todo o mundo.")
}


var computador = 0
var opcao = - 1

do { // exemplo clássico da utilização do do...while

	imprimirMenu()

	opcao = Number(s('Digite uma opção: '))

	// adicionem novos cases para novas opções
	switch (opcao) {
		case 1:
			jogar()
			break
		case 2:
			sobre()
			break
    case 3:
      comojogar()
      break
    case 4:
      historia()
      break
	}
  if (opcao > 5) {
    console.log("Valor Inválido, por favor escolher novamente.")
    
  }
} while (opcao != 5)



