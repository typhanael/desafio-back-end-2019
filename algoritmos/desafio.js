
//faz leitura do teclado
let readline = require('readline');

//inicia a quantidade de * que serão utilizados com 0,
//caso não seja passado valores como argumento...
//arrow function para fazer a recursão...
let triangulo = (base, estrelas = 0) =>{
        //string para fazer a concatenação dos valores
        //Solução para quebra de linhas do console.log()...
        let text="";
        
        //teste para a saida da recursão
        if (base == 0) return 0
        else{
            //concatenação dos valores...
            text='_'.repeat(base-1)+
                 '*'.repeat(estrelas*2+1)+
                 '_'.repeat(base-1)
            
            console.log(text)
            //recursão para se montar o triangulo...
            return triangulo(base-1, estrelas+1)
        }
    
}

//leitura dos dados...
let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite o tamanho da base do triangulo:\n", function(answer) {
    let valor = answer;

    console.log("Triangulo:\n")
    triangulo(valor)
    
    leitor.close();

});






