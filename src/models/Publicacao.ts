import { ItemAcervo } from "./AItemAcervo";
import { Localizavel } from "./ILocalizavel";

export class Publicacao extends ItemAcervo implements Localizavel{

    protected numeroDePaginas:number = 0;
    localizacao:string = "";

    constructor(anoPublicacao:number, titulo: string, numeroDePaginas:number, localizacao:Localizavel){
        super(anoPublicacao, titulo);
        this.localizacao = localizacao.localizacao;
        this.numeroDePaginas = numeroDePaginas;
    }

    definirLocalizacao(localizacao:string){
        
    }

    obterLocalizacao():string{
        return "retorno";
    }

}

