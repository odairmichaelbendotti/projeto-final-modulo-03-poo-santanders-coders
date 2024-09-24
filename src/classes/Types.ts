export interface ItemAcervo {
    id: number;
    titulo: string;
    localizacao: string;
    disponivel: boolean;
  }
  
  // Tipagem para Livro
  export interface Livro extends ItemAcervo {
    isbn: string;
    autor: string;
  }
  
  // Tipagem para Revista
  export interface Revista extends ItemAcervo {
    autor: string;
    editora: string;
  }
  
  // Tipagem para CD
  export interface CD extends ItemAcervo {
    duracao: number;
    artista: string;
  }
  
  // Tipagem para DVD
  export interface DVD extends ItemAcervo {
    duracao: number;
    diretor: string;
  }
  
  // Tipagem para o Banco de Dados Completo
  export interface BibliotecaType {
    livros: Livro[];
    revistas: Revista[];
    cds: CD[];
    dvds: DVD[];
  }