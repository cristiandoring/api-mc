import { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { IGaleriaService } from "../contracts/iGaleriaService";

@injectable()
 class GaleriaController {

  constructor(@inject('IGaleriaService') private _service: IGaleriaService) { }

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

export default GaleriaController