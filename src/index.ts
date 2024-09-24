import { biblioteca } from "./bd/bd";

for (let i = 0; i < biblioteca.livros.length; i++) {
    console.log(`${biblioteca.livros[i].id} - ${biblioteca.livros[i].autor}`)
}