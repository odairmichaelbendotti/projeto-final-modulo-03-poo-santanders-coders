import { Localizavel } from "../interfaces/ILocalizavel";
import { Midia } from "../mediumclasses/Midia";

export class DVD extends Midia implements Localizavel{

    formato:string = '';
    localizacao:string = '';

    constructor(anoPublicacao: number, titulo: string, duracao: number,formato:string,localizacao:string){
        super(anoPublicacao, titulo, duracao)
        this.formato = formato;
        this.localizacao = localizacao;
    }

    definirLocalizacao(localizacao:string){
        
    }

    obterLocalizacao():string{
        return "retorno";
    }
}