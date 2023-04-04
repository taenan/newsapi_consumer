import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesComponent } from './containers/articles/articles.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    AppMaterialModule,
    PipesModule
  ]
})
export class ArticlesModule { }
