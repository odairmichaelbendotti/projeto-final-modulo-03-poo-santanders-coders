import { ItemAcervo } from "./abstractclass/AItemAcervo";
import { Midia } from "./mediumclasses/Midia";
import { Publicacao } from "./mediumclasses/Publicacao";
import { CD } from "./subclasses/CD";
import { DVD } from "./subclasses/DVD";
import { Livro } from "./subclasses/Livro";
import { Revista } from "./subclasses/Revista";
import prompt from 'readline-sync';

export class Biblioteca<T extends ItemAcervo> {
    opcao: string = '';
    acervo: T[] = [];

    adicionarItem(item: T): void {
        this.acervo.push(item)
    }

    editarItem(idEditar: string) {
        const itemEditar = this.acervo.find(item => item.titulo === idEditar);
        const titulo = prompt.question(`Titulo: `);
        const anoPublicacao = prompt.questionInt(`Ano da publicacao: `);

        if (itemEditar) {
            itemEditar.titulo = titulo;
            itemEditar.anoPublicacao = anoPublicacao;

            if (itemEditar instanceof Publicacao) {
                const numeroDePaginas = prompt.questionInt(`Numero De Paginas: `);
                itemEditar.numeroDePaginas = numeroDePaginas;

                if (itemEditar instanceof Livro) {
                    const isbn = prompt.questionInt(`ISBN: `);
                    itemEditar.isbn = isbn;
                } else if (itemEditar instanceof Revista) {
                    const editora = prompt.question(`Editora: `)
                    itemEditar.editora = editora;
                }

            } else if (itemEditar instanceof Midia) {
                const duracao = prompt.questionInt(`Duração: `);
                itemEditar.duracao = duracao;

                if (itemEditar instanceof CD) {
                    const faixas = prompt.questionInt(`Quantidade de Faixas: `);
                    itemEditar.faixas = faixas;

                } else if (itemEditar instanceof DVD) {
                    const formato = prompt.question(`Formato: `);
                    itemEditar.formato = formato;
                }
            }
        } else {
            console.log("Item não encontrado!");
        }
    }

    emprestarItem(idEmprestar: string) {
        const itemEditar = this.acervo.find(item => item.titulo === idEmprestar);
        if(itemEditar && (itemEditar instanceof Publicacao || itemEditar instanceof Midia)){
            itemEditar.disponiblidade = false;
            itemEditar.definirLocalizacao();
        } 
    }

    devolverItem(){

    }

    listarAcervo() {
        console.log(this.acervo)
    }

    exibirItem(idExibir: string): void {
        console.table(this.acervo.find(item => item.titulo === idExibir));
    }

    removerItem(idRemover: string) {
        this.acervo = this.acervo.filter(item => item.titulo !== idRemover);
    }


    menu() {

        let id;

        while (this.opcao !== 'sair') {
            this.opcao = prompt.question(`Qual tipo de midia você gostaria de adicionar.
1. CD | 2. DVD | 3. Livro | 4. Revista | 5. Sair
Sua opcao: `)

            switch (this.opcao) {
                case '1':
                    prompt.questionInt()
                    break
                case '2':
                    break
                case '3':
                    break
                case '4':
                    break
                case '5':
                    break
            }
        }
    }

}
