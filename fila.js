class Fila {
    constructor(){
        this.itens = [];
    }

    adicionar(nome){
        this.itens.push(nome);
    }

    remover(){
        if(this.itens.length == 0){
            return 'Removido com sucesso';
        }
        return this.itens.shift();
    }
}

const entrada = require('prompt-sync')({sigint: true});
let operacao;

operacao = entrada('Digite 1 para adicionar itens a fila ou Digite 2 para remover itens da fila: ');

let minhaFila = new Fila();

if (operacao < 1 || operacao > 2){
    console.log('Selecione uma das opções validas');
} else if(operacao == 1){
    let nome = entrada('Digite o item que deseja adiconar: ');
    minhaFila.adicionar(nome);
    console.log(minhaFila);

} else {
    console.log(minhaFila.remover());
}