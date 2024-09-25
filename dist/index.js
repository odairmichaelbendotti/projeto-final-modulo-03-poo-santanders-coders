"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bd_1 = require("./bd/bd");
for (let i = 0; i < bd_1.biblioteca.livros.length; i++) {
    console.log(`${bd_1.biblioteca.livros[i].id} - ${bd_1.biblioteca.livros[i].autor}`);
}
