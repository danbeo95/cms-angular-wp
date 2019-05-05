import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-pagination',
  templateUrl: './post-list-pagination.component.html',
  styleUrls: ['./post-list-pagination.component.scss']
})
export class PostListPaginationComponent implements OnInit {
  mPage:number = 1;
  @Output('onNextChange') onNextChange:EventEmitter<number> = new EventEmitter();
  @Output('onPrevChange') onPrevChange:EventEmitter<number> = new EventEmitter();
  @Input('canNextPage') canNextPage:boolean;
  constructor() { }

  ngOnInit() {
  }
  onClickNext(){
    if(!this.canNextPage) return;
    this.mPage = this.mPage + 1;
    this.onNextChange.emit(this.mPage);
  }
  onClickPrev(){
    if(this.mPage===1) return;
    this.canNextPage = true;
    this.mPage = this.mPage -1;
    this.onPrevChange.emit(this.mPage);
  }
}
