export class Result<T> {
  Qtd: number = 0;
  Page: number = 0;
  Total: number = 0;
  Data: Array<T> = [];
}

class Core {
  titulo: string = ''; 
  texto: string = '';
  imagem: string = '';
  dataPublicacao: Date = new Date();
  tags: string = '';
  link: string = '';
  ativo: boolean = false; 
}