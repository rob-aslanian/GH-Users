import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReversePipe } from 'src/app/core/pipes/reverse.pipe';
import { SearchKeywordComponent } from './search-keywords/search-keyword/search-keyword.component';
import { SearchKeywordsComponent } from './search-keywords/search-keywords.component';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchKeywordsComponent,
    SearchKeywordComponent,
    ReversePipe,
  ],
  imports: [FontAwesomeModule, FormsModule, CommonModule],
  exports: [SearchComponent],
})
export class SearchModule {}
