"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
const Midia_1 = require("../mediumclasses/Midia");
class DVD extends Midia_1.Midia {
    constructor(anoPublicacao, titulo, duracao, formato, localizacao) {
        super(anoPublicacao, titulo, duracao);
        this.formato = '';
        this.localizacao = '';
        this.formato = formato;
        this.localizacao = localizacao;
    }
    definirLocalizacao(localizacao) {
    }
    obterLocalizacao() {
        return "retorno";
    }
}
exports.DVD = DVD;
