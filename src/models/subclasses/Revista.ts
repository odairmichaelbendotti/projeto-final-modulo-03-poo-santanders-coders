import { Localizavel } from "../interfaces/ILocalizavel";
import { Publicacao } from "../mediumclasses/Publicacao";



export class Revista extends Publicacao implements Localizavel{

    editora: string = "";
    localizacao: string = '';

    constructor(anoDePublicacao:number, titulo:string, numeroDePaginas:number, editora:string, localizacao:string){
        super(anoDePublicacao, titulo, numeroDePaginas);
        this.editora = editora;
    }

    definirLocalizacao(localizacao:string){
        
    }

    obterLocalizacao():string{
        return "retorno";
    }

}