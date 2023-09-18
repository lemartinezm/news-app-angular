import { Injectable } from '@angular/core';
import { NewsResponse } from './news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor() {}

  async getNews(category: string): Promise<NewsResponse> {
    const response = await fetch(
      `https://news-app-api.onrender.com/api/news?category=${category}`
    );
    const data: NewsResponse = await response.json();
    return data;
  }
}
