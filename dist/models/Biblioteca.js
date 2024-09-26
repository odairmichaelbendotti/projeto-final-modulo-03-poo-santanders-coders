"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        // cd:CD;
        // dvd:DVD;
        // revista:Revista;
        // livro:Livro
        this.opcao = '';
        this.acervo = [];
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
    // constructor(anoPublicacao:number,titulo:string,duracao:number,faixas:number,localizacao:string,formato:string,numeroPaginas:number,editora:string,isbn:number){
    //     this.cd = new CD(anoPublicacao,titulo,duracao,faixas,localizacao);
    //     this.dvd = new DVD(anoPublicacao,titulo,duracao,formato,localizacao);
    //     this.revista = new Revista(anoPublicacao,titulo,numeroPaginas,editora,localizacao);
    //     this.livro = new Livro(anoPublicacao,titulo,numeroPaginas,isbn,localizacao)
    // }
    adicionarItem(item) {
        //     this.collection.push(item);
        // return item;
        this.acervo.push(item);
    }
    editarItem() { }
    removerItem() { }
    listarItem() { }
}
exports.Biblioteca = Biblioteca;
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
