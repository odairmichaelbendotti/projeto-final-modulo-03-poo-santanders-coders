import { ItemAcervo } from "./abstractclass/AItemAcervo";
import { CD } from "./subclasses/CD";
import { DVD } from "./subclasses/DVD";
import { Livro } from "./subclasses/Livro";
import { Revista } from "./subclasses/Revista";

import prompt from 'readline-sync';

class Biblioteca{
    cd:CD;
    dvd:DVD;
    revista:Revista;
    livro:Livro
    opcao:string = '';

    constructor(anoPublicacao:number,titulo:string,duracao:number,faixas:number,localizacao:string,formato:string,numeroPaginas:number,editora:string,isbn:number){
        this.cd = new CD(anoPublicacao,titulo,duracao,faixas,localizacao);
        this.dvd = new DVD(anoPublicacao,titulo,duracao,formato,localizacao);
        this.revista = new Revista(anoPublicacao,titulo,numeroPaginas,editora,localizacao);
        this.livro = new Livro(anoPublicacao,titulo,numeroPaginas,isbn,localizacao)
    }

    adicionarItem(){}

    editarItem(){}

    removerItem(){}

    listarItem(){}

    menu(){
        while(this.opcao !== 'sair'){
            this.opcao = prompt.question(`Qual tipo de midia você gostaria de adicionar.
1. CD | 2. DVD | 3. Livro | 4. Revista | 5. Sair
Sua opcao: `)

            switch(this.opcao){
                case '1':
                    break
                case '2':
                    break
                case '3':
                    break
                case '4':
                    break
                case '5':
                    break
            }
        }
    }
        
}