"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videos = void 0;
const core_1 = require("./core");
class Videos extends core_1.Core {
    constructor() {
        super(...arguments);
        this.url = '';
        this.duracao = '';
    }
}
exports.Videos = Videos;
