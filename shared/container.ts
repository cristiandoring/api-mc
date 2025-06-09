import "reflect-metadata";
import { container } from "tsyringe";
import { GaleriaService } from "../services/galeriaService";
import { NewsService } from "../services/NewsService";
import { VideosService } from "../services/videosService";
container.register("INewsService", {
  useClass: NewsService,
});
container.register("IVideosService", {
  useClass: VideosService,
});
container.register("IGaleriaService", {
  useClass: GaleriaService,
});
