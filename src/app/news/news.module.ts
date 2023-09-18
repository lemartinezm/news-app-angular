import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, CardComponent],
})
export class NewsModule {}
