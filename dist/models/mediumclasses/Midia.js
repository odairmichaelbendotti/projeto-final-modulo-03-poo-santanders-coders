"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midia = void 0;
const AItemAcervo_1 = require("../abstractclass/AItemAcervo");
class Midia extends AItemAcervo_1.ItemAcervo {
    constructor(anoPublicacao, titulo, duracao) {
        super(anoPublicacao, titulo);
        this.duracao = 0;
        this.duracao = duracao;
    }
}
exports.Midia = Midia;
