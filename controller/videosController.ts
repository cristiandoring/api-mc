import { Request, Response } from "express";
import { injectable, inject, container } from "tsyringe";
import { IVideosService } from "../contracts/iVideosService";
import { VideosService } from "../services/videosService"; // A importação do serviço concreto é necessária para o tsyringe

@injectable()
class VideosController {

  constructor(@inject('IVideosService') private _service: IVideosService) { }

  async get(request: Request, response: Response) {
    try {
      const page = request.params.page ? parseInt(request.params.page) : 1;
      const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
      let result = await this._service.getAll(page, qtd);
      response.status(200).json({ result });
    } catch (error) {
      let errorMessage = "Ocorreu um erro desconhecido.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      response.status(500).json({ error: errorMessage });
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const _id = request.params.id;
      let result = await this._service.get(_id);
      response.status(200).json({ result });
    } catch (error) {
      let errorMessage = "Ocorreu um erro desconhecido.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      response.status(500).json({ error: errorMessage });
    }
  }
}

// Resolvendo a instância através do contêiner do tsyringe e exportando-a
export default container.resolve(VideosController);