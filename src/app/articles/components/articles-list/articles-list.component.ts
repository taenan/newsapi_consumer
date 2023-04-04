import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { PlatformLocation } from '@angular/common';

import { Article } from '../../model/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {
  @Input() articles: Article[] = [];

  innerWidth: any;
  cols!: number
  host: string

  constructor(private platformLocation: PlatformLocation) {
    this.host = platformLocation.href;
  }

  ngOnInit() {
    this.onResize(null)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.cols = this.getCol()
  }

  private getCol() {
    if (this.innerWidth > 1410) {
      return 3
    }

    if (this.innerWidth > 950) {
      return 2
    }
    return 1
  }
}
