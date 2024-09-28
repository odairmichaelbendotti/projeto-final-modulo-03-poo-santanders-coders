import { ItemAcervo } from "./abstractclass/AItemAcervo";
import { Midia } from "./mediumclasses/Midia";
import { Publicacao } from "./mediumclasses/Publicacao";
import { CD } from "./subclasses/CD";
import { DVD } from "./subclasses/DVD";
import { Livro } from "./subclasses/Livro";
import { Revista } from "./subclasses/Revista";
import prompt from 'readline-sync';

export class Biblioteca{
    id: number = 0;
    acervo: ItemAcervo[] = [];

    adicionarItem():void{
        const tipoItem = prompt.questionInt(`Digite o numero do tipo de item voce deseja adicionar:
1. CD | 2. DVD | 3. Livro | 4. Revista
Sua opcao: `);

        this.id ++
        const itemTitulo = prompt.question(`Digite o titulo do item: `)
        const itemAno = prompt.questionInt(`Digite o ano de publicacao do item: `);
        switch (tipoItem) {
            case 1:
                const cdDuracaoHoras = prompt.questionInt(`Digite a duracao em horas: `);
                const cdDuracaoMinutos = prompt.questionInt(`Digite a duracao em minutos: `);
                const cdDuracaoSegundos = prompt.questionInt(`Digite a duracao em segundos: `);
                const cdDuracao = `${cdDuracaoHoras}:${cdDuracaoMinutos}:${cdDuracaoSegundos}`
                const cdFaixas = prompt.questionInt(`Digite a quantidade de faixas do CD: `);
                const novoCD = new CD(this.id, itemAno, itemTitulo, cdDuracao, cdFaixas,);
                this.acervo.push(novoCD)
                break

            case 2:
                const dvdDuracaoHoras = prompt.questionInt(`Digite a duracao em horas: `);
                const dvdDuracaoMinutos = prompt.questionInt(`Digite a duracao em minutos: `);
                const dvdDuracaoSegundos = prompt.questionInt(`Digite a duracao em segundos: `);
                const dvdFormato = prompt.question(`Digite o formato do DVD: `)
                const dvdDuracao = `${dvdDuracaoHoras}:${dvdDuracaoMinutos}:${dvdDuracaoSegundos}`
                const novoDVD = new DVD(this.id, itemAno, itemTitulo, dvdDuracao, dvdFormato);
                this.acervo.push(novoDVD)
                break

            case 3:
                const livroISBN = prompt.questionInt(`Digite o ISBN do livro: `);
                const livroPaginas = prompt.questionInt(`Digite o numero de paginas do livro: `);
                const novoLivro = new Livro(this.id, itemAno, itemTitulo, livroISBN, livroPaginas);
                this.acervo.push(novoLivro)
                break

            case 4:
                const revistaEditora = prompt.question(`Digite a editora da revista: `);
                const revistaPaginas = prompt.questionInt(`Digite o numero de paginas da revista: `);
                const novaRevista = new Revista(this.id, itemAno, itemTitulo, revistaPaginas, revistaEditora);
                this.acervo.push(novaRevista)
                break

            default:
                console.log(`Opção inválida.`);
                break
        }
    }

    editarItem():void{
        const idEditar = prompt.questionInt(`Digite o ID do item que voce deseja editar: `)
        const itemEditar = this.acervo.find(item => item.id === idEditar);
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
                const itemDuracaoHoras = prompt.questionInt(`Digite a duracao em horas: `);
                const itemDuracaoMinutos = prompt.questionInt(`Digite a duracao em minutos: `);
                const itemDuracaoSegundos = prompt.questionInt(`Digite a duracao em segundos: `);
                const itemDuracao = `${itemDuracaoHoras}:${itemDuracaoMinutos}:${itemDuracaoSegundos}`
                itemEditar.duracao = itemDuracao;

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

    emprestarItem():void{
        const idEmprestar = prompt.questionInt(`Qual o ID do item que voce deseja pegar emprestado: `)
        const itemEmprestar = this.acervo.find(item => item.id === idEmprestar);
        if (itemEmprestar && (itemEmprestar instanceof Publicacao || itemEmprestar instanceof Midia)) {
            itemEmprestar.disponiblidade = false;
            itemEmprestar.definirLocalizacao();
        }
    }

    devolverItem():void{
        const idDevolver = prompt.questionInt(`Digite o ID do item que voce deseja devolver: `)
        const itemDevolver = this.acervo.find(item => item.id === idDevolver)
        if (itemDevolver && (itemDevolver instanceof Publicacao || itemDevolver instanceof Midia)) {
            itemDevolver.disponiblidade = true;
            itemDevolver.definirLocalizacao();
        }
    }

    listarAcervo():void{
        console.log(this.acervo)
    }

    exibirItem():void{
        const idExibir = prompt.questionInt(`Digite o ID do item que voce deseja exibir: `)
        console.table(this.acervo.find(item => item.id === idExibir));
    }

    removerItem():void {
        const idRemover = prompt.questionInt(`Digite o ID do item que voce deseja remover: `)
        this.acervo = this.acervo.filter(item => item.id !== idRemover);
    }

    Menu(){
        let opcaoMenu:number = 0;
        while(opcaoMenu !== 8){
        opcaoMenu = prompt.questionInt(`Digite o numero da acao que voce deseja executar:
1. Adicionar um item | 2. Editar um item | 3. Exibir um item | 4. Listar acervo | 5. Remover um item | 6. Emprestar um item | 7. Devolver um item  | 8. Sair 
Sua opcao: `)
            switch (opcaoMenu) {
                case 1:
                    this.adicionarItem()
                    break
                case 2:
                    this.editarItem()
                    break
                case 3:
                    this.exibirItem()
                    break
                case 4:
                    this.listarAcervo()
                    break
                case 5:
                    this.removerItem()
                    break
                case 6:
                    this.emprestarItem()
                    break
                case 7:
                    this.devolverItem()
                    break
                case 8:
                    console.log('Fechando menu...')
                    break
                default:
                    console.log('Opcao Inválida')
            }
        }
    }
}
