import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-options-status',
  templateUrl: './post-options-status.component.html',
  styleUrls: ['./post-options-status.component.scss']
})
export class PostOptionsStatusComponent implements OnInit {
  @Output('onChange') onChange:EventEmitter<string> = new EventEmitter();
  mStatus:Array<string> = ['publish', 'future', 'draft', 'pending', 'private'];
  statusSelect:string;
  constructor() { }

  ngOnInit() {
    this.statusSelect = this.mStatus[2];
    this.onChange.emit(this.statusSelect);
  }
  onStatusChange(){
    this.onChange.emit(this.statusSelect);
  }
}
