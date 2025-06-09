import { Request, Response } from 'express';

class GaleriaController {
  
  async get(req: Request, res: Response) {
    try {
      const page = req.params.page || 1;
      const qtd = req.params.qtd || 10;
      return res.status(200).json({ message: `Buscando galeria - Página: ${page}, Qtd: ${qtd}` });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Falha ao buscar galeria' });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      return res.status(200).json({ message: `Buscando item da galeria com ID: ${id}` });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Falha ao buscar item da galeria por ID' });
    }
  }
}

export default new GaleriaController();