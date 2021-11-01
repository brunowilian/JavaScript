
function pow(a,b) {
    var r = 1
    for (var i=0; i<b; i++) {
      r *= a
    }
    return r
  }
  var br = pow (-10,2)
  console.log(br)


    /*
        let a = 10 ( A solução foi colocar no  primeiro "()", para usar na função )
        let b = 2 ( A solução foi colocar no primeiro "()", para usar na função )
        let r = 1 
    
    
        for (i = 0; i <= b; i++) {   
            r = r * a ( o erro foi não ter a variavel "r" depois do "=", solução foi remover a
             primaira variavel "r" e juntar o "*" + "=", mudando sua ordem)
           
        } 
    
        console.log("resultado", r) (o erro é essa linha, solução é colocar um return usando "r")
    } 
    A solução para a liha do console.log(), é criar uma variavel Aqui nessa linha, após a chave, 
    com a function de condição e fazer um novo console.log(), chamando essa variavel.
    */