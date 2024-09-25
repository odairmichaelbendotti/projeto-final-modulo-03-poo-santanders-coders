// import { biblioteca } from "./bd/bd";

import { CD } from "./models/subclasses/CD";
import { DVD } from "./models/subclasses/DVD";
import { Livro } from "./models/subclasses/Livro";

// for (let i = 0; i < biblioteca.livros.length; i++) {
//     console.log(`${biblioteca.livros[i].id} - ${biblioteca.livros[i].autor}`)
// }



// const revista1 = new Livro(1990,"O Conde de Monte Cristo",157,1549,'estante')
// console.log(revista1)

const cd1 = new CD(2010,"Xuxa só para baixinhos 2",48,24,'quarto')

const dvd1 = new DVD(2019,"Vingadores 2",1.59,"mp4",'banheiro')

console.log(cd1)
console.log(dvd1)

