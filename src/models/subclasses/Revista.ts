import { Publicacao } from "../mediumclasses/Publicacao";

export class Revista extends Publicacao {

    editora: string = "";
    localizacao: string = '';

    constructor(anoDePublicacao:number, titulo:string, numeroDePaginas:number, editora:string){
        super(anoDePublicacao, titulo, numeroDePaginas);
        this.editora = editora;
    }


}