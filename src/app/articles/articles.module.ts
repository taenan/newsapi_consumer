import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesComponent } from './containers/articles/articles.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleSearchFormComponent } from './containers/article-search-form/article-search-form.component';

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticlesComponent,
    ArticleSearchFormComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    AppMaterialModule,
    PipesModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule { }
