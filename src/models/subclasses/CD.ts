import { Localizavel } from "../interfaces/ILocalizavel";
import { Midia } from "../mediumclasses/Midia";
import { biblioteca } from "../../bd/bd";
import readline from 'readline-sync';

export class CD extends Midia implements Localizavel {
    faixas: number = 0;
    localizacao: string = '';

    constructor(anoPublicacao: number, titulo: string, duracao: number, faixas: number, localizacao: string) {
        super(anoPublicacao, titulo, duracao)
        this.faixas = faixas;
        this.localizacao = localizacao;
    }

    addCd() {
        biblioteca.cds.push({
            id: (biblioteca.cds.length + 1),
            anoPublicacao: this.anoPublicacao,
            titulo: this.titulo,
            duracao: this.duracao,
            faixas: this.faixas,
            localizacao: this.localizacao
        })
        const total = biblioteca.cds.length - 1
        console.table(`${this.titulo} adicionado com sucesso.`)
        console.table(biblioteca.cds[total])
    }

    static mostrarCds() {
        console.table(biblioteca.cds)
    }

    static deletarCd(idDelete: number) {
        biblioteca.cds = biblioteca.cds.filter(item => {
            return item.id !== Number(idDelete)
        });
        console.table(biblioteca.cds)
    }

    static editarCd(idEditar: number) {
        const editado = biblioteca.cds.find(item => {
            return item.id === idEditar
        })

        if(!editado){
            console.log('ID não encontrado.')
            return
        }

        const opcoes = readline.question(`
Qual informacao voce deseja editar?
1. Ano da publicacao | 2. Titulo | 3. Duracao | 4. Faixas | 5. Localizacao
Opcao escolhida: `)

        switch (opcoes) {
            case '1':
                const novoAnoPublicacao = readline.question(`Informe o novo ano de publicacao: `)
                editado.anoPublicacao = Number(novoAnoPublicacao)
                console.table(biblioteca.cds)
                break
            case '2':
                const novoTitulo = readline.question(`Informe o novo titulo: `)
                editado.titulo = novoTitulo
                console.table(biblioteca.cds)
                break
            case '3':
                const novoDuracao = readline.question(`Informe a nova duracao: `)
                editado.duracao = Number(novoDuracao)
                console.table(biblioteca.cds)
                break
            case '4':
                const novoFaixas = readline.question(`Informe o novo numero de faixas: `)
                editado.faixas = Number(novoFaixas)
                console.table(biblioteca.cds)
                break
            case '5':
                const novoLocalizacao = readline.question(`Informea nova localizacao: `)
                editado.localizacao = novoLocalizacao
                console.table(biblioteca.cds)
                break
        }
    }
}