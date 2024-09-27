import { Midia } from "../mediumclasses/Midia";

export class DVD extends Midia{
    ID:number = 0;
    formato:string = '';
    localizacao:string = 'Prateleira 2';

    constructor(ID:number,anoPublicacao: number, titulo: string, duracao: number,formato:string){
        super(anoPublicacao, titulo, duracao)
        this.formato = formato;
    }
}