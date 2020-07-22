import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NewsModule} from './modules/news/news.module';
import {NewsService} from './services/news.service';
import {RequesterService} from './services/requester.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NewsModule
  ],
  providers: [NewsService, RequesterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
