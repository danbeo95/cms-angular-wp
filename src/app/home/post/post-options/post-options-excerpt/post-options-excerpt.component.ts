import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post-options-excerpt',
  templateUrl: './post-options-excerpt.component.html',
  styleUrls: ['./post-options-excerpt.component.scss']
})
export class PostOptionsExcerptComponent implements OnInit {
  @Output('onChange') onChange:EventEmitter<string> = new EventEmitter();
  text:string = '';

  constructor() { }
  ngOnInit() {
  }
  onTextChange(){
    this.onChange.emit(this.text);
  }
}
