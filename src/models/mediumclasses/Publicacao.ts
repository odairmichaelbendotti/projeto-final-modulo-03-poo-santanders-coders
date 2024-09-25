import { ItemAcervo } from "../abstractclass/AItemAcervo";
export class Publicacao extends ItemAcervo{

    protected numeroDePaginas:number = 0;

    constructor(anoPublicacao:number, titulo: string, numeroDePaginas:number){
        super(anoPublicacao, titulo);
        this.numeroDePaginas = numeroDePaginas;
    }
}

