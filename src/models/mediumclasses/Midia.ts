import { ItemAcervo } from "../abstractclass/AItemAcervo";

export class Midia extends ItemAcervo{
    protected duracao:number = 0;

    constructor(anoPublicacao:number, titulo: string, duracao:number){
        super(anoPublicacao, titulo);
        this.duracao = duracao;
    }
}