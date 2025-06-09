"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const core_1 = require("./core");
class News extends core_1.Core {
    constructor() {
        super(...arguments);
        this.chapeu = '';
        this.autor = '';
    }
}
exports.News = News;
