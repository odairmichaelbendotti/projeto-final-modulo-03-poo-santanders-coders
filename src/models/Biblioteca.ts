import { ItemAcervo } from "./abstractclass/AItemAcervo";
import { Midia } from "./mediumclasses/Midia";
import { Publicacao } from "./mediumclasses/Publicacao";
import { CD } from "./subclasses/CD";
import { DVD } from "./subclasses/DVD";
import { Livro } from "./subclasses/Livro";
import { Revista } from "./subclasses/Revista";
import prompt from 'readline-sync';

export class Biblioteca<T extends ItemAcervo> {
    opcaoMenu: number = 0;
    tipoItem: number = 0;
    ID: number = 0;
    acervo: ItemAcervo[] = [];

    verificarID(){
        if(this.acervo.length !== 0){
            // const novoId = Math.max(...item.map(item => item.id));
            // return this.acervo.
        } 
        return 1

    }

    adicionarItem() {
        const tipoItem = prompt.questionInt(`Escolha o tipo de item:
1. CD | 2. DVD | 3. Livro | 4. Revista
Sua opcao: `);

        const itemTitulo = prompt.question(`Titulo do item: `)
        const itemAno = prompt.questionInt(`Ano de Publicacao do item: `);
        switch (tipoItem) {
            case 1:
                const cdDuracao = prompt.questionInt(`Duracao: `);
                const cdFaixas = prompt.questionInt(`Faixas: `);
                const novoCD = new CD(this.ID, itemAno, itemTitulo, cdDuracao, cdFaixas,);
                this.acervo.push(novoCD)
                break

            case 2:
                const dvdDuracao = prompt.questionInt(`Duracao: `);
                const dvdFormato = prompt.question(`Formato: `);
                const novoDVD = new DVD(this.ID, itemAno, itemTitulo, dvdDuracao, dvdFormato);
                this.acervo.push(novoDVD)
                break

            case 3:
                const livroISBN = prompt.questionInt(`ISBN: `);
                const livroPaginas = prompt.questionInt(`Numero de Paginas: `);
                const novoLivro = new Livro(this.ID, itemAno, itemTitulo, livroISBN, livroPaginas);
                this.acervo.push(novoLivro)
                break

            case 4:
                const revistaEditora = prompt.question(`Editora: `);
                const revistaPaginas = prompt.questionInt(`Numero de Paginas: `);
                const novaRevista = new Revista(this.ID, itemAno, itemTitulo, revistaPaginas, revistaEditora);
                this.acervo.push(novaRevista)
                break

            default:
                console.log(`Opção inválida.`);
                break
        }
    }

    editarItem() {
        const idEditar = prompt.question(`Qual o ID do item que voce deseja editar?`)
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
                const duracao = prompt.questionInt(`Duracao: `);
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

    emprestarItem() {
        const idEmprestar = prompt.question(`Qual o ID do item que voce deseja editar?`)
        const itemEditar = this.acervo.find(item => item.titulo === idEmprestar);
        if (itemEditar && (itemEditar instanceof Publicacao || itemEditar instanceof Midia)) {
            itemEditar.disponiblidade = false;
            itemEditar.definirLocalizacao();
        }
    }

    devolverItem() {

    }

    listarAcervo() {
        console.log(this.acervo)
    }

    exibirItem(): void {
        const idExibir = prompt.question(`Qual o ID do item que voce deseja exibir?`)
        console.table(this.acervo.find(item => item.titulo === idExibir));
    }

    removerItem() {
        const idRemover = prompt.question(`Qual o ID do item que voce deseja remover?`)
        this.acervo = this.acervo.filter(item => item.titulo !== idRemover);
    }

    Menu() {
        const opcaoMenu: number = prompt.questionInt(`Qual tipo de ação você gostaria de executar:
1. Adicionar um item | 2. Editar um item | 3. Exibir um item | 4. Listar acervo | 5. Remover um item | 6. Sair
Sua opcao:`)

        switch (this.tipoItem) {
            case 1:
                this.adicionarItem()
                break
            case 2:
                this.editarItem()
                break
            case 3:
                this.exibirItem
                break
            case 4:
                this.listarAcervo
                break
            case 5:
                this.removerItem
                break
        }
    }
}
