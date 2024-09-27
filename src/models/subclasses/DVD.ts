import { Midia } from "../mediumclasses/Midia";

export class DVD extends Midia{

    formato:string = '';
    localizacao:string = '';

    constructor(anoPublicacao: number, titulo: string, duracao: number,formato:string){
        super(anoPublicacao, titulo, duracao)
        this.formato = formato;
    }
}