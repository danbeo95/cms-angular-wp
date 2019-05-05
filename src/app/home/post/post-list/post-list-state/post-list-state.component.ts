import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list-state',
  templateUrl: './post-list-state.component.html',
  styleUrls: ['./post-list-state.component.scss']
})
export class PostListStateComponent implements OnInit {
  stateSelected:number = 0;
  @Output('onStateChange') onStateChange:EventEmitter<string> = new EventEmitter();
  mStates: Array<any> = [
    { name: 'Pushlished',value:'publish',id:0 },
    { name: 'Future',value:'future',id:1 },
    { name: 'Draft',value:'draft',id:2 },
    { name: 'Pending',value:'pending',id:3 },
    { name: 'Private',value:'private',id:4 },
    { name: 'Trash',value:'trash',id:5 }

  ]
  constructor() { }

  ngOnInit() {
  }
  onClickState(state){
    this.stateSelected = state.id;
    this.onStateChange.emit(state.value);
  }
}
