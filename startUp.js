"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const db_1 = __importDefault(require("./infra/db"));
require("./shared/container");
const newsController_1 = require("./controller/newsController");
const videosController_1 = require("./controller/videosController");
const galeriaController_1 = require("./controller/galeriaController");
class StartUp {
    constructor() {
        this.app = (0, express_1.default)();
        this.news = tsyringe_1.container.resolve(newsController_1.NewsController);
        this.videos = tsyringe_1.container.resolve(videosController_1.VideosController);
        this.galeria = tsyringe_1.container.resolve(galeriaController_1.GaleriaController);
        this.routes();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.2" });
        });
        /* news */
        this.app
            .route("/api/v1/news/:page/:qtd")
            .get((req, res) => {
            return this.news.get(req, res);
        });
        this.app.route("/api/v1/news/:id").get((req, res) => {
            return this.news.getById(req, res);
        });
        /* videos */
        this.app
            .route("/api/v1/videos/:page/:qtd")
            .get((req, res) => {
            return this.videos.get(req, res);
        });
        this.app.route("/api/v1/videos/:id").get((req, res) => {
            return this.videos.getById(req, res);
        });
        /* galeria */
        this.app
            .route("/api/v1/galeria/:page/:qtd")
            .get((req, res) => {
            return this.galeria.get(req, res);
        });
        this.app.route("/api/v1/galeria/:id").get((req, res) => {
            return this.galeria.getById(req, res);
        });
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const port = process.env.PORT || 3000;
        const db = new db_1.default();
        yield db.createConnection();
        const app = new StartUp().app;
        app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
    });
}
main();
