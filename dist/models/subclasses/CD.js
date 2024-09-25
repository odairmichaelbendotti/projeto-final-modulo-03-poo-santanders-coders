"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CD = void 0;
const Midia_1 = require("../mediumclasses/Midia");
const bd_1 = require("../../bd/bd");
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
}
exports.CD = CD;
