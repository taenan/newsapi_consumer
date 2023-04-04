import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Article } from '../model/article';
import { ArticleResponse } from '../model/article-response';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private readonly API = `${environment.API}/everything?q=tesla&from=2023-03-03&sortBy=publishedAt'`;

  private cache: Article[] = [];

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ArticleResponse>(this.API).pipe(
      first(),
      map(data => data.articles),
      tap(data => (this.cache = data))
    );
  }
  /*
    loadURL(url: string) {
      return this.http.get<Article>(`${this.API}/loadurl?url=${url}`).pipe(first());
    }
  
    loadById(id: number) {
      if (this.cache.length > 0) {
        const record = this.cache.find(record => `${record.id}` === `${id}`);
        return record != null ? of(record) : this.getById(id);
      }
      return this.getById(id);
    }
  
    loadBySlug(slug: string) {
      if (this.cache.length > 0) {
        const record = this.cache.find(record => `${record.slug}` === `${slug}`);
        return record != null ? of(record) : this.getBySlug(slug);
      }
      return this.getBySlug(slug);
    }
  
    private getById(id: number) {
      return this.http.get<Article>(`${this.API}/${id}`).pipe(first());
    }
  
    private getBySlug(slug: string) {
      return this.http.get<Article>(`${this.API}/public/findbyslug?slug=${slug}`).pipe(first());
    }
  */
}
