import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'gh-search-keywords',
  templateUrl: './search-keywords.component.html',
  styleUrls: ['./search-keywords.component.scss'],
})
export class SearchKeywordsComponent implements OnInit {
  keywords$: Observable<string[]>;

  constructor(private readonly searchService: SearchService) {}

  ngOnInit(): void {
    this.keywords$ = this.searchService.searchedHistory;
  }
}
