import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../services/news.service';
import {News} from '../../../interfaces/news';
import {
  fadeInOnEnterAnimation

} from 'angular-animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter'}),
  ]
})
export class ListComponent implements OnInit {
  search: string;
  list: Array<News> = null;
  totalSize: number = null;
  currentPage = 1;


  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadList();
  }

  async loadList(currentPage?, search?): Promise<any> {
    const data = await this.newsService.getNewsList(currentPage, search);
    console.log('d', data);
    this.list  = data.articles;
    this.totalSize = data.totalResults;
  }

  changePage(p): any {
    window.scroll({ top: 0, left: 0, behavior: 'smooth'});
    this.loadList(p.pageIndex, this.search);
  }

  searchArticle(): any {
    this.currentPage = 1;
    this.loadList(this.currentPage, this.search);
  }

}
