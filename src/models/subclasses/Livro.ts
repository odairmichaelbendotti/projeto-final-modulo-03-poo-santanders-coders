import { Publicacao } from "../mediumclasses/Publicacao";



export class Livro extends Publicacao{

    isbn:number = 0;
    localizacao: string = '';


    constructor(anoDePublicacao:number, titulo:string, numeroDePaginas:number, isbn:number){
        super(anoDePublicacao, titulo, numeroDePaginas);
        this.isbn = isbn;
    }

}