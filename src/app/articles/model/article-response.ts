import { Article } from './article';

export interface ArticleResponse {
  articles: Article[];
  status: string;
  totalResults: number;
}