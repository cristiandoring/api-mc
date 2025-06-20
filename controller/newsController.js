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
Object.defineProperty(exports, "__esModule", { value: true });
class GaleriaController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = req.params.page || 1;
                const qtd = req.params.qtd || 10;
                return res.status(200).json({ message: `Buscando galeria - Página: ${page}, Qtd: ${qtd}` });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Falha ao buscar galeria' });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                return res.status(200).json({ message: `Buscando item da galeria com ID: ${id}` });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Falha ao buscar item da galeria por ID' });
            }
        });
    }
}
exports.default = new GaleriaController();
