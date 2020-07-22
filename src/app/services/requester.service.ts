import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {
  apiUrl = 'https://newsapi.org/v2';
  apiKey = '0fda0004807a41f8a876c77a5731f16d';

  constructor(private http: HttpClient) { }

  get(cmd: string, params: any = {}): Promise<any> {
    return this.http.get(`${this.apiUrl}/${cmd}`, {
      params: {...params, apiKey: this.apiKey},
    }).toPromise()
    .catch(console.log);
  }
}
