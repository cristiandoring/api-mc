"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
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
exports.Core = Core;
