"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const Publicacao_1 = require("../mediumclasses/Publicacao");
class Revista extends Publicacao_1.Publicacao {
    constructor(anoDePublicacao, titulo, numeroDePaginas, editora, localizacao) {
        super(anoDePublicacao, titulo, numeroDePaginas);
        this.editora = "";
        this.localizacao = '';
        this.editora = editora;
    }
    definirLocalizacao(localizacao) {
    }
    obterLocalizacao() {
        return "retorno";
    }
}
exports.Revista = Revista;
