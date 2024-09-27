import { Publicacao } from "../mediumclasses/Publicacao";



export class Livro extends Publicacao{
    ID:number = 0;
    isbn:number = 0;
    localizacao: string = 'Estante 1';


    constructor(ID:number,anoDePublicacao:number, titulo:string, numeroDePaginas:number, isbn:number){
        super(anoDePublicacao, titulo, numeroDePaginas);
        this.isbn = isbn;
    }

}