import { Localizavel } from "./ILocalizavel";
import { Publicacao } from "./Publicacao";


export class Revista extends Publicacao {

    editora: string = "";

    constructor(anoDePublicacao:number, titulo:string, numeroDePaginas:number, editora:string, localizacao:Localizavel){
        super(anoDePublicacao, titulo, numeroDePaginas, localizacao);
        this.editora = editora;
    }

}