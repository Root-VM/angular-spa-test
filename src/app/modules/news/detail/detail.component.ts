import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../../services/news.service';
import { slideInRightOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [
    slideInRightOnEnterAnimation(),
  ]
})
export class DetailComponent implements OnInit {
  data: any = null;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.data = this.newsService.selectedNews.getValue();
    console.log('c', this.data)
  }

}
