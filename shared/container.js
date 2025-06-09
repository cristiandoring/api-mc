"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const galeriaService_1 = require("../services/galeriaService");
const NewsService_1 = require("../services/NewsService");
const videosService_1 = require("../services/videosService");
tsyringe_1.container.register("INewsService", {
    useClass: NewsService_1.NewsService,
});
tsyringe_1.container.register("IVideosService", {
    useClass: videosService_1.VideosService,
});
tsyringe_1.container.register("IGaleriaService", {
    useClass: galeriaService_1.GaleriaService,
});
