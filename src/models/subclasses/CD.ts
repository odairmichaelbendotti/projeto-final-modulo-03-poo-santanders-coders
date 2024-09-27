
import { Midia } from "../mediumclasses/Midia";

export class CD extends Midia  {
    ID:number = 0;
    faixas: number = 0;
    localizacao: string = 'Prateleira 1';

    constructor(ID:number,anoPublicacao: number, titulo: string, duracao: number, faixas: number) {
        super(anoPublicacao, titulo, duracao)
        this.faixas = faixas;
    }

}