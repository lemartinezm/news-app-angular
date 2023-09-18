import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from './news.service';
import { News } from './news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  currentCategory: string | null = '';
  currentNews: News[] = [];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const category = params['category'];
      this.currentCategory = category;
      this.newsService
        .getNews(category)
        .then((response) => (this.currentNews = response.articles));
    });
  }
}
