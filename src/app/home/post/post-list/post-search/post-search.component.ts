import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {
  mSearchQuery:string = '';
  @Output('onSearchChange') onSearchChange:EventEmitter<string> = new EventEmitter();
  constructor(private postService:PostService) { }

  ngOnInit() {
  }
  onSearch(){
    this.onSearchChange.emit(this.mSearchQuery);
  }
}
