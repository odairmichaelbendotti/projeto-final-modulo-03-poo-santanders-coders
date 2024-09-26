import { ItemAcervo } from "./abstractclass/AItemAcervo";
import { CD } from "./subclasses/CD";
import { DVD } from "./subclasses/DVD";
import { Livro } from "./subclasses/Livro";
import { Revista } from "./subclasses/Revista";

import prompt from 'readline-sync';

export class Biblioteca<T extends ItemAcervo>{
    opcao:string = '';
    acervo: T[] = [];

    adicionarItem(item:T):void{
        this.acervo.push(item)
    }

    editarItem(){}

    removerItem(){}

    listarItem(){}

//     menu(){
//         while(this.opcao !== 'sair'){
//             this.opcao = prompt.question(`Qual tipo de midia você gostaria de adicionar.
// 1. CD | 2. DVD | 3. Livro | 4. Revista | 5. Sair
// Sua opcao: `)

//             switch(this.opcao){
//                 case '1':
                    
//                     break
//                 case '2':
//                     break
//                 case '3':
//                     break
//                 case '4':
//                     break
//                 case '5':
//                     break
//             }
//         }
//     }
        
}

// switch (cd) {
//     case '1':
//         const anoPublicacao = readline.question(`Ano da publicacao: `)
//         const titulo = readline.question(`Titulo: `)
//         const duracao = readline.question(`Tempo de duracao: `)
//         const faixas = readline.question('Numero de faixas: ')
//         const localizacao = readline.question('Informe a localizao: ')

//         const cd1 = new CD(Number(anoPublicacao), titulo, Number(duracao), Number(faixas), localizacao)
//         cd1.addCd()
//         break