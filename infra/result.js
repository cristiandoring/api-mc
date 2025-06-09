"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor() {
        this.Qtd = 0;
        this.Page = 0;
        this.Total = 0;
        this.Data = [];
    }
}
exports.Result = Result;
class Core {
    constructor() {
        this.titulo = '';
        this.texto = '';
        this.imagem = '';
        this.dataPublicacao = new Date();
        this.tags = '';
        this.link = '';
        this.ativo = false;
    }
}
