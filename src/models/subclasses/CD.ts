import { Localizavel } from "../interfaces/ILocalizavel";
import { Midia } from "../mediumclasses/Midia";
import { biblioteca } from "../../bd/bd";

export class CD extends Midia implements Localizavel {
    faixas: number = 0;
    localizacao: string = '';

    constructor(anoPublicacao: number, titulo: string, duracao: number, faixas: number, localizacao: string) {
        super(anoPublicacao, titulo, duracao)
        this.faixas = faixas;
        this.localizacao = localizacao;
    }

    addCd() {
        biblioteca.cds.push({
            id: (biblioteca.cds.length + 1),
            anoPublicacao: this.anoPublicacao,
            titulo: this.titulo,
            duracao: this.duracao,
            faixas: this.faixas,
            localizacao: this.localizacao
        })
        const total = biblioteca.cds.length - 1
        console.table(`${this.titulo} adicionado com sucesso.`)
        console.table(biblioteca.cds[total])
    }

    mostrarCds() {
        console.table(biblioteca.cds)
    }
}