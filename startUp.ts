import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import { container } from "tsyringe";
import Database from "./infra/db";

import "./shared/container";

import { NewsController } from "./controller/newsController";
import { VideosController } from "./controller/videosController";
import { GaleriaController } from "./controller/galeriaController";

class StartUp {
  public app: Application;

  private news: NewsController;
  private videos: VideosController;
  private galeria: GaleriaController;

  constructor() {
    this.app = express();

    this.news = container.resolve(NewsController);
    this.videos = container.resolve(VideosController);
    this.galeria = container.resolve(GaleriaController);

    this.routes();
  }

  private routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.2" });
    });

    /* news */
    this.app
      .route("/api/v1/news/:page/:qtd")
      .get((req: Request, res: Response) => {
        return this.news.get(req, res);
      });

    this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
      return this.news.getById(req, res);
    });

    /* videos */
    this.app
      .route("/api/v1/videos/:page/:qtd")
      .get((req: Request, res: Response) => {
        return this.videos.get(req, res);
      });

    this.app.route("/api/v1/videos/:id").get((req: Request, res: Response) => {
      return this.videos.getById(req, res);
    });

    /* galeria */
    this.app
      .route("/api/v1/galeria/:page/:qtd")
      .get((req: Request, res: Response) => {
        return this.galeria.get(req, res);
      });

    this.app.route("/api/v1/galeria/:id").get((req: Request, res: Response) => {
      return this.galeria.getById(req, res);
    });
  }
}

async function main() {
  const port = process.env.PORT || 3000;
  
  const db = new Database();
  await db.createConnection();

  const app = new StartUp().app;

  app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
}

main();