import { Injectable } from '@angular/core';
import {RequesterService} from './requester.service';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  selectedNews: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private requesterService: RequesterService) { }

  getNewsList(page = 1, search?: string): Promise<any> {
    const params = !!search ? { domains: 'engadget.com', pageSize: 10, qInTitle: search, page, language: 'en'} :
                              { domains: 'engadget.com', pageSize: 10, page, language: 'en'};

    return this.requesterService.get('everything', params);
  }
}
