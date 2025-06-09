import { News } from "../models/news";
import { Result } from "../infra/result";
import {NewsRepository} from "../repository/newsRepository";
import { INewsService } from "../contracts/iNewsService";

export class NewsService implements INewsService {
  async get(_id: string): Promise<News | null> {
    let result = await NewsRepository.findById(_id);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<News>> {
    let result = new Result<News>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await NewsRepository.countDocuments({});
    result.Data = await NewsRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }
}
