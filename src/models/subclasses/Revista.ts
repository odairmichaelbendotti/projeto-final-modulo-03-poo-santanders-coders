import { Publicacao } from "../mediumclasses/Publicacao";

export class Revista extends Publicacao {
    ID:number = 0;
    editora: string = "";
    localizacao: string = 'Estante 2';

    constructor(ID:number,anoDePublicacao:number, titulo:string, numeroDePaginas:number, editora:string){
        super(anoDePublicacao, titulo, numeroDePaginas);
        this.editora = editora;
    }


}