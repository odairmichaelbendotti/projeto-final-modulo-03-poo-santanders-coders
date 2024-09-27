import { Biblioteca } from './models/Biblioteca';
import { DVD } from './models/subclasses/DVD';
import { Livro } from './models/subclasses/Livro';
import { CD } from "./models/subclasses/CD";
import { Revista } from './models/subclasses/Revista';

const dvd1 = new DVD(2020,'Filmes Pirateados',5,'b');
const livro1 = new Livro(2000,'Clean Code',5,4);

const biblioteca = new Biblioteca();
biblioteca.adicionarItem(dvd1);
biblioteca.adicionarItem(livro1);
biblioteca.emprestarItem("Clean Code");
biblioteca.exibirItem("Clean Code");


