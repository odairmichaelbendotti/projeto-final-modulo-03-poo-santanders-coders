import readline from 'readline-sync';

import { CD } from "./models/subclasses/CD";
import { biblioteca } from './bd/bd';

let opcao: string = ''

while (opcao !== 'sair') {
    opcao = readline.question(`Escolher a instancia a ser gerenciada.
1. CD | 2. DVD | 3. Livro | 4. Revista
Sua opcao: `)

    switch (opcao) {
        case '1':
            const cd = readline.question(`
** Qual a ordem? **
1. Adicionar CD | 2. Listar Todos | 3. Remover CD | 4. Editar CD
Sua opcao: `)
            switch (cd) {
                case '1':
                    const anoPublicacao = readline.question(`Ano da publicacao: `)
                    const titulo = readline.question(`Titulo: `)
                    const duracao = readline.question(`Tempo de duracao: `)
                    const faixas = readline.question('Numero de faixas: ')
                    const localizacao = readline.question('Informe a localizao: ')

                    const cd1 = new CD(Number(anoPublicacao), titulo, Number(duracao), Number(faixas), localizacao)
                    cd1.addCd()
                    break
                case '2':
                    console.table(biblioteca.cds)
                    break
                case '3':
                    console.table(biblioteca.cds)
                    const cddelete = readline.question(`
Qual o ID do CD que voce deseja remover?: `)

                    biblioteca.cds = biblioteca.cds.filter(item => {
                        return item.id !== Number(cddelete)
                    });
                    console.table(biblioteca.cds)
                    break
            }
            break

    }
}
// import { DVD } from "./models/subclasses/DVD";
// import { Livro } from "./models/subclasses/Livro";

// for (let i = 0; i < biblioteca.livros.length; i++) {
//     console.log(`${biblioteca.livros[i].id} - ${biblioteca.livros[i].autor}`)
// }

// const revista1 = new Livro(1990,"O Conde de Monte Cristo",157,1549,'estante')
// console.log(revista1)


// const cd2 = new CD(2010,"Xuxa só para baixinhos 2",48,24,'quarto').addCd()
// const cd3 = new CD(2020,"Testando 123",48,24,'quarto').addCd()
// const cd4 = new CD(2024,"Testando 4563",48,24,'estante')

// cd4.mostrarCds()