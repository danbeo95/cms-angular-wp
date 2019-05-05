import { Component, OnInit,Output,EventEmitter,Input,OnChanges } from '@angular/core';
import { TagService } from '../../tag.service';
import { Post } from 'src/app/home/data.model/post';
@Component({
  selector: 'app-post-quick-edit-tag',
  templateUrl: './post-quick-edit-tag.component.html',
  styleUrls: ['./post-quick-edit-tag.component.scss']
})
export class PostQuickEditTagComponent implements OnInit,OnChanges {
  @Output('onTagsChange') onTagsChange:EventEmitter<any> = new EventEmitter();
  @Input('post') mPost:Post;
  constructor() { }
  tagsModel:string = '';
  ngOnChanges(){
    this.doFilterTagName();
  }
  ngOnInit() {
  }
  onKeyUp(){
    if(this.tagsModel==''){
      this.onTagsChange.emit([])
    }
    else{
      this.onTagsChange.emit(this.tagsModel.split(','));
    }
  }
  doFilterTagName(){
    let arrTagsName :Array<string> = [];
    this.mPost.tags_name.map((tag)=>{
      arrTagsName.push(tag.name);
    });
    this.tagsModel = arrTagsName.join(',');
  }
}
