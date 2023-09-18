import { Component, Input } from '@angular/core';
import { News } from '../news.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
})
export class CardComponent {
  @Input() currentArticle!: News;
}
