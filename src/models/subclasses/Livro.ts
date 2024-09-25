import { Localizavel } from "../interfaces/ILocalizavel";
import { Publicacao } from "../mediumclasses/Publicacao";



export class Livro extends Publicacao implements Localizavel{

    isbn:number = 0;
    localizacao: string = '';


    constructor(anoDePublicacao:number, titulo:string, numeroDePaginas:number, isbn:number, localizacao:string){
        super(anoDePublicacao, titulo, numeroDePaginas);
        this.isbn = isbn;
        this.localizacao = localizacao
    }

    definirLocalizacao(localizacao:string){
        
    }

    obterLocalizacao():string{
        return "retorno";
    }

}