import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Article } from '../model/article';
import { ArticleResponse } from '../model/article-response';
import { ArticleSearch } from '../model/article-search';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private readonly API = `${environment.API}/everything`;

  private cache: Article[] = [];

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ArticleResponse>(`${this.API}?q=tesla&sortBy=publishedAt`).pipe(
      first(),
      map(data => data.articles),
      tap(data => (this.cache = data))
    );
  }

  search(search: ArticleSearch) {
    return this.http.get<ArticleResponse>(`${this.API}?${search.toUrlParams()}`).pipe(
      first(),
      map(data => data.articles),
      tap(data => (this.cache = data))
    );
  }

}
