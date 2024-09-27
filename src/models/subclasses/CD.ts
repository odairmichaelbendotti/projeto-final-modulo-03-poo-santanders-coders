
import { Midia } from "../mediumclasses/Midia";

export class CD extends Midia  {
    faixas: number = 0;
    localizacao: string = 'Prateleira 1';

    constructor(anoPublicacao: number, titulo: string, duracao: number, faixas: number) {
        super(anoPublicacao, titulo, duracao)
        this.faixas = faixas;
    }

}