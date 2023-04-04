import { Source } from "src/app/sources/model/source";

export interface Article {
  id: number;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: number;
  publishedAt: Date;
  content: string;
  source: Source
}