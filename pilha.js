class Pilha {
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
        return this.itens.pop();
    }
}

const entrada = require('prompt-sync')({sigint: true});
let operacao;

operacao = entrada('Digite 1 para adicionar itens a pilha ou Digite 2 para remover itens da pilha: ');

let minhaPilha = new Pilha();

if (operacao < 1 || operacao > 2){
    console.log('Selecione uma das opções validas');
} else if(operacao == 1){
    let nome = entrada('Digite o item que deseja adiconar: ');
    minhaPilha.adicionar(nome);
    console.log(minhaPilha);

} else {
    console.log(minhaPilha.remover());
}