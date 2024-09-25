"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CD = void 0;
const Midia_1 = require("../mediumclasses/Midia");
const bd_1 = require("../../bd/bd");
const readline_sync_1 = __importDefault(require("readline-sync"));
class CD extends Midia_1.Midia {
    constructor(anoPublicacao, titulo, duracao, faixas, localizacao) {
        super(anoPublicacao, titulo, duracao);
        this.faixas = 0;
        this.localizacao = '';
        this.faixas = faixas;
        this.localizacao = localizacao;
    }
    addCd() {
        bd_1.biblioteca.cds.push({
            id: (bd_1.biblioteca.cds.length + 1),
            anoPublicacao: this.anoPublicacao,
            titulo: this.titulo,
            duracao: this.duracao,
            faixas: this.faixas,
            localizacao: this.localizacao
        });
        const total = bd_1.biblioteca.cds.length - 1;
        console.table(`${this.titulo} adicionado com sucesso.`);
        console.table(bd_1.biblioteca.cds[total]);
    }
    static mostrarCds() {
        console.table(bd_1.biblioteca.cds);
    }
    static deletarCd(idDelete) {
        bd_1.biblioteca.cds = bd_1.biblioteca.cds.filter(item => {
            return item.id !== Number(idDelete);
        });
        console.table(bd_1.biblioteca.cds);
    }
    static editarCd(idEditar) {
        const editado = bd_1.biblioteca.cds.find(item => {
            return item.id === idEditar;
        });
        if (!editado) {
            console.log('ID não encontrado.');
            return;
        }
        const opcoes = readline_sync_1.default.question(`
Qual informacao voce deseja editar?
1. Ano da publicacao | 2. Titulo | 3. Duracao | 4. Faixas | 5. Localizacao
Opcao escolhida: `);
        switch (opcoes) {
            case '1':
                const novoAnoPublicacao = readline_sync_1.default.question(`Informe o novo ano de publicacao: `);
                editado.anoPublicacao = Number(novoAnoPublicacao);
                console.table(bd_1.biblioteca.cds);
                break;
            case '2':
                const novoTitulo = readline_sync_1.default.question(`Informe o novo titulo: `);
                editado.titulo = novoTitulo;
                console.table(bd_1.biblioteca.cds);
                break;
            case '3':
                const novoDuracao = readline_sync_1.default.question(`Informe a nova duracao: `);
                editado.duracao = Number(novoDuracao);
                console.table(bd_1.biblioteca.cds);
                break;
            case '4':
                const novoFaixas = readline_sync_1.default.question(`Informe o novo numero de faixas: `);
                editado.faixas = Number(novoFaixas);
                console.table(bd_1.biblioteca.cds);
                break;
            case '5':
                const novoLocalizacao = readline_sync_1.default.question(`Informea nova localizacao: `);
                editado.localizacao = novoLocalizacao;
                console.table(bd_1.biblioteca.cds);
                break;
        }
    }
}
exports.CD = CD;
