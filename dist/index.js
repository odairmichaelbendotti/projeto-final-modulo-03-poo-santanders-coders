"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const CD_1 = require("./models/subclasses/CD");
const bd_1 = require("./bd/bd");
let opcao = '';
while (opcao !== 'sair') {
    opcao = readline_sync_1.default.question(`Escolher a instancia a ser gerenciada.
1. CD | 2. DVD | 3. Livro | 4. Revista
Sua opcao: `);
    switch (opcao) {
        case '1':
            const cd = readline_sync_1.default.question(`
** Qual a ordem? **
1. Adicionar CD | 2. Listar Todos | 3. Remover CD | 4. Editar CD
Sua opcao: `);
            switch (cd) {
                case '1':
                    const anoPublicacao = readline_sync_1.default.questionInt(`Ano da publicacao: `);
                    const titulo = readline_sync_1.default.question(`Titulo: `);
                    const duracao = readline_sync_1.default.questionInt(`Tempo de duracao(minutos): `);
                    const faixas = readline_sync_1.default.questionInt('Numero de faixas: ');
                    const localizacao = readline_sync_1.default.question('Informe a localizao: ');
                    if (anoPublicacao <= 0 || titulo.trim() === '' || duracao < 0 || faixas < 0 || localizacao.trim() === '') {
                        console.log('Informações inválidas! Preencha todos o campos com valores válidos.');
                        break;
                    }
                    const cd1 = new CD_1.CD(anoPublicacao, titulo, duracao, faixas, localizacao);
                    cd1.addCd();
                    break;
                case '2':
                    CD_1.CD.mostrarCds();
                    break;
                case '3':
                    console.table(bd_1.biblioteca.cds);
                    if (bd_1.biblioteca.cds.length === 0) {
                        console.log('Não há itens para remover!');
                        break;
                    }
                    const cddelete = readline_sync_1.default.questionInt(`
Qual o ID do CD que voce deseja remover?: `);
                    if (cddelete <= 0) {
                        console.log('ID inválido!');
                        break;
                    }
                    const index = bd_1.biblioteca.cds.findIndex((cd) => cd.id === cddelete);
                    if (index === -1) {
                        console.log('CD não encontrado!');
                        break;
                    }
                    CD_1.CD.deletarCd(cddelete);
                    break;
                case '4':
                    console.table(bd_1.biblioteca.cds);
                    let editar = Number(readline_sync_1.default.question(`
ID do item que sera editado: `));
                    CD_1.CD.editarCd(editar);
            }
            break;
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
