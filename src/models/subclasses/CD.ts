import { Localizavel } from "../interfaces/ILocalizavel";
import { Midia } from "../mediumclasses/Midia";

export class CD extends Midia implements Localizavel{

    faixas:number = 0;
    localizacao:string = '';

    constructor(anoPublicacao: number, titulo: string, duracao: number,faixas:number,localizacao:string){
        super(anoPublicacao, titulo, duracao)
        this.faixas = faixas;
        this.localizacao = localizacao;
    }

    definirLocalizacao(localizacao:string){
        
    }

    obterLocalizacao():string{
        return "retorno";
    }
}