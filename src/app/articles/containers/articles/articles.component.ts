import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component'
import { ArticlesService } from 'src/app/articles/services/articles.service';
import { Article } from 'src/app/articles/model/article'
import { HttpErrorResponse } from '@angular/common/http';
import { ArticleSearch } from '../../model/article-search';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Article[]> | null = null;

  constructor(
    private articlesService: ArticlesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.articles$ = this.articlesService.list().pipe(
      catchError((e) => {
        this.onError(e);
        return of([]);
      })
    );
  }

  submit(search: ArticleSearch) {
    this.articles$ = this.articlesService.search(search).pipe(
      catchError((e) => {
        this.onError(e);
        return of([]);
      })
    );
  }

  onError(errorResponse: HttpErrorResponse) {
    const message = errorResponse.error['code'] === "apiKeyInvalid" ? "Configure sua API key no arquivo enviroment" : errorResponse.error['message']
    this.dialog.open(ErrorDialogComponent, {
      data: message
    });
  }

}
