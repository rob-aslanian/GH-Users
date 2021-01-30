import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/core/services/search/search.service';
@Component({
  selector: 'gh-search-keyword',
  templateUrl: './search-keyword.component.html',
  styleUrls: ['./search-keyword.component.scss'],
})
export class SearchKeywordComponent implements OnInit {
  @Input() keyword: string;
  icon = faTrash;

  constructor(private readonly searchService: SearchService) {}

  ngOnInit(): void {}

  redirect = () => this.searchService.redirect(this.keyword);

  remove = () => this.searchService.removeName(this.keyword);
}
