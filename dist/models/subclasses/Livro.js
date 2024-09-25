"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const Publicacao_1 = require("../mediumclasses/Publicacao");
class Livro extends Publicacao_1.Publicacao {
    constructor(anoDePublicacao, titulo, numeroDePaginas, isbn, localizacao) {
        super(anoDePublicacao, titulo, numeroDePaginas);
        this.isbn = 0;
        this.localizacao = '';
        this.isbn = isbn;
        this.localizacao = localizacao;
    }
    definirLocalizacao(localizacao) {
    }
    obterLocalizacao() {
        return "retorno";
    }
}
exports.Livro = Livro;
