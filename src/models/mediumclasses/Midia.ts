import { ItemAcervo } from "../abstractclass/AItemAcervo";
import { Localizavel } from "../interfaces/ILocalizavel";

export class Midia extends ItemAcervo implements Localizavel{
    duracao:number = 0;
    localizacao: string = "";
    constructor(anoPublicacao:number, titulo: string, duracao:number){
        super(anoPublicacao, titulo);
        this.duracao = duracao;
    }

    definirLocalizacao():void{
        if(this.disponiblidade){
            this.localizacao = "";
        }else{
            this.localizacao = ("indisponivel");
        }
    }

    obterLocalizacao():string{
        return this.localizacao;
    }
}