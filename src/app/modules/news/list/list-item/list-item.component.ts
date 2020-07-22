import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../../../interfaces/news';
import {Router} from '@angular/router';
import {NewsService} from "../../../../services/news.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() value: News;

  constructor(
    private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
  }

  goToDetail(): any {
    this.newsService.selectedNews.next(this.value);
    this.router.navigateByUrl('/detail');
  }
}
